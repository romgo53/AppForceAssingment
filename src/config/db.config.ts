import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'company',
});


db.connect((err) => {
    if (err) {
        console.log('Error connecting to Db')
        throw err;
    }
    console.log('MySql connected successfully!');
});
export default db;

