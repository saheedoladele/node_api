"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD, ENV, TEST_BD } = process.env;
let client;
console.log(ENV);
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: DB_SERVER,
        database: TEST_BD,
        user: DB_USER,
        password: DB_PASSWORD
    });
}
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: DB_SERVER,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD
    });
}
exports.default = client;
