import mysql from 'mysql2';
import fs from 'fs';


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'company',
});


db.connect((err) => {
    if (err) {
        console.log('Error connecting to Db')
        throw err;
    }
    console.log('MySql Connected...');
});
export default db;

