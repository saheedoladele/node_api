// @ts-ignore
import client from "../database"

export type Student = {
    id: number,
    firstName: string,
    lastName: string,
    dateOfbirth: string,
    email: string,
}

export class StudentStore {
    
     async index(): Promise<Student[]> {
        
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = "SELECT * FROM students"
            const result = await conn.query(sql)
            conn.release()
            return  result.rows
        } catch (error) {
            throw new Error("Unable to get data" + error);  
        }
     }

//Show
     async show(id: string): Promise<Student> {
        try {
        const sql = 'SELECT * FROM students WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find student ${id}. Error: ${err}`)
        }
      }

     //Create new student record
     async create(s: Student): Promise<null> {
        // @ts-ignore
          const conn = await client.connect()
          const sql = 'INSERT INTO students (firstName, lastName, dob, email) VALUES($1, $2, $3, $4) RETURNING *'
          const result = await conn .query(sql, [s.firstName, s.lastName, s.dateOfbirth, s.email])
          const student = result.rows[0]
          conn.release()
          return student
        }

        // Delete student by id
      

            async delete(id: string): Promise<Student> {
                try {
              const sql = 'DELETE FROM students WHERE id=($1)'
              // @ts-ignore
              const conn = await Client.connect()
          
              const result = await conn.query(sql, [id])
          
              const student = result.rows[0]
          
              conn.release()
          
              return student
                } catch (err) {
                    throw new Error(`Could not delete book ${id}. Error: ${err}`)
                }
            }
     
}