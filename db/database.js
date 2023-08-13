import sql from 'mssql';
import 'dotenv/config';

class Database {
    constructor() {
        let config = {
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            server: process.env.DB_HOST,
            database: process.env.DB_NAME,
            options: {
                trustServerCertificate: true,
            }
        };
        this.pool = new sql.ConnectionPool(config);
    }

    connect = async() => {
        try {
            await this.pool.connect();
        } catch(error) {
            console.error('Error connecting to the database:', error.message);
        }
    }

    doQuery = async(query) => {
        try {
            const result = await this.pool.request().query(query);
            return result.recordset;
        } catch (error) {
            throw new Error(`Database query error: ${error.message}`);
        }
    }
}

export default Database;