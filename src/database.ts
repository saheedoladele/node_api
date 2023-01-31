import dotenv from "dotenv"
import { Pool } from "pg"
dotenv.config()


const { DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD, ENV, TEST_BD} = process.env

let client



console.log(ENV)

if(ENV === 'test') {
     client = new Pool({
        host: DB_SERVER,
        database: TEST_BD,
        user: DB_USER,
        password: DB_PASSWORD
    })
}

if(ENV === 'dev') {
     client = new Pool({
        host: DB_SERVER,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD
    })
}

export default client
