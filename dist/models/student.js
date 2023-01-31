"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentStore = void 0;
// @ts-ignore
const database_1 = __importDefault(require("../database"));
class StudentStore {
    async index() {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM students";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error("Unable to get data" + error);
        }
    }
    //Show
    async show(id) {
        try {
            const sql = 'SELECT * FROM students WHERE id=($1)';
            // @ts-ignore
            const conn = await Client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find student ${id}. Error: ${err}`);
        }
    }
    //Create new student record
    async create(s) {
        // @ts-ignore
        const conn = await database_1.default.connect();
        const sql = 'INSERT INTO students (firstName, lastName, dob, email) VALUES($1, $2, $3, $4) RETURNING *';
        const result = await conn.query(sql, [s.firstName, s.lastName, s.dateOfbirth, s.email]);
        const student = result.rows[0];
        conn.release();
        return student;
    }
    // Delete student by id
    async delete(id) {
        try {
            const sql = 'DELETE FROM students WHERE id=($1)';
            // @ts-ignore
            const conn = await Client.connect();
            const result = await conn.query(sql, [id]);
            const student = result.rows[0];
            conn.release();
            return student;
        }
        catch (err) {
            throw new Error(`Could not delete book ${id}. Error: ${err}`);
        }
    }
}
exports.StudentStore = StudentStore;
