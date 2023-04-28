const mysql = require('mysql');

//Form connection details
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLrootpwd",
    database: "deepDB"
});

//Drop table
con.connect(function(err, res){
    if (err) throw err;
    console.log("Connected to deepDB");
    const dropsql = "DROP TABLE CUSTOMERS";
    con.query(dropsql, function(err, res){
        if (err) throw err;
        console.log("Table CUSTOMERS dropped");
    });
});
const deluexistssql = "DROP TABLE IF EXISTS USERS";
con.query(deluexistssql, function(err, res){
    if (err) throw err;
    console.log("Response from attempting to drop a table USERS")
    console.log(res);
});
const delpexistssql = "DROP TABLE IF EXISTS PRODUCTS";
con.query(delpexistssql, function(err, res){
    if (err) throw err;
    console.log("Response from attempting to drop a table PRODUCTS")
    console.log(res);
});
