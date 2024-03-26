// npm install mysql --save
const mysql = require('mysql');

// Create connection
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: "root",
    password: "",
    database: "projectprep01"
});

conn.connect();
module.exports = conn;
