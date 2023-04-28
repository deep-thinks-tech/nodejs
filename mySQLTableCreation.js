const mySQL = require('mysql');

const con = mySQL.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MySQLrootpwd",
        database: "deepDB"
    }
);

//Connect to DB
con.connect(function(err){
    if(err) throw err;
    console.log("Connected to deepDB");
});

//Create table
const sql = "CREATE TABLE CUSTOMERS (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function(err, res){
    if(err) throw err;
    console.log("Table CUSTOMERS created");
});
