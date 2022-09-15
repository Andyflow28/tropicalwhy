import { createPool } from "mysql2/promise";

const pool = createPool({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    port: process.env.DB_PORT, 
    database: process.env.DB,
});

export { pool }