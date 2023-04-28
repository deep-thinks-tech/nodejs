const mysql = require('mysql');

//Form connection request
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLrootpwd",
    database: "deepDB"
});

//Connect to DB
con.connect(function(err){
   if (err)throw err;
   console.log("Connected to deepDB");
});

//Create table with primary key
const createsql = "CREATE TABLE CUSTOMERS (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
con.query(createsql, function(err, res){
    if (err) throw err;
    console.log("Table CUSTOMERS created with primary key");
});
//Alter table
const altersql = "ALTER TABLE CUSTOMERS ADD COLUMN phone VARCHAR(255)";
con.query(altersql, function(err){
    if (err) throw err;
    console.log("Table CUSTOMERS altered");
});

//Create Users and Products table to demonstrate joins
const prodsql = "CREATE TABLE PRODUCTS (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
con.query(prodsql, function(err, res){
    if (err) throw err;
    console.log("Table PRODUCTS created");
});

const usersql = "CREATE TABLE USERS (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), favprod INT)";
con.query(usersql, function(err, res){
    if (err) throw err;
    console.log("Table USERS created");
});

//Insert into table
const insertsql = "INSERT INTO CUSTOMERS (name, address, phone) VALUES ('Tedda Putta', 'San Jose, CA', '1211222344')";
con.query(insertsql, function(err){
    if (err) throw err;
    console.log("One row added");
});

//Insert multiple records into the table
const insertmsql = "INSERT INTO CUSTOMERS (name, address, phone) VALUES ?";
const values = [
    ['John', 'New York, NY', '1211222345'],
    ['Mia', 'Seattle, WA', '1211222343'],
    ['Abigail','Chicago, IL','1111222343'],
    ['Michelle','Denver, CO', '1234222343']
];
con.query(insertmsql, [values], function(err, res){
    if (err) throw err;
    console.log("No of rows inserted "+res.affectedRows);
});
//Insert records into PRODUCTS table
const insertpsql = "INSERT INTO PRODUCTS (name) VALUES ?";
const pvalues = [
    ['Macbook'],
    ['iPad'],
    ['iPhone'],
    ['Airpods'],
    ['Apple Watch']
];
con.query(insertpsql, [pvalues], function(err, res){
    if (err) throw err;
    console.log("No of rows inserted into the PRODUCTS table "+res.affectedRows);
});

//Insert records into USERS table
const insertusql = "INSERT INTO USERS (username, favprod) VALUES ?";
const uvalues = [
    ['Ted','1'],
    ['Caroline','2'],
    ['Jackie','3'],
    ['Maxine','4'],
    ['Jeremy','0']
];
con.query(insertusql, [uvalues], function(err, res){
    if (err) throw err;
    console.log("No of rows inserted into the USERS table "+res.affectedRows);
});

//Query table
const querymsql = "SELECT * FROM CUSTOMERS ORDER BY NAME";
con.query(querymsql, function(err, res){
    if (err) throw err;
    console.log("Table data")
    console.log(res);
});

//Query selective rows in the table
const querycondsql = "SELECT name, address from CUSTOMERS WHERE id in (1, 2)";
con.query(querycondsql, function(err, res){
    if (err) throw err;
    console.log("Table data with ID 1 and 2");
    console.log(res);
});

//Query with limits (how many rows have to be returned) and offsets (from which row. Row number starts with 0)
const querylosql = "SELECT * FROM CUSTOMERS LIMIT 1, 4"; //Same result can be obtained by SELECT * FROM CUSTOMERS LIMIT 2 OFFSET 1 
con.query(querylosql, function(err, res){
    if (err) throw err;
    console.log('Limited records starting with offset')
    console.log(res);
});

//Query with escape characters
const nam = "Ted%";
const addr = 'New York, NY';
const queryescapesql = 'SELECT name, address from CUSTOMERS where name LIKE ? OR address = ' + mysql.escape (addr);
con.query(queryescapesql, [nam], function(err, res){
    if (err) throw err;
    console.log("Table data with name Ted or address in New York");
    console.log(res);
});

//Query with join
const joinquerysql = "SELECT USERS.username as user, PRODUCTS.name as favorite from USERS JOIN PRODUCTS ON USERS.favprod = PRODUCTS.id";
con.query(joinquerysql,function(err, res){
    if (err) throw err;
    console.log("Users' favorite products are ");
    console.log(res);
});

//Query with left join
const joinquerylsql = "SELECT USERS.username as user, PRODUCTS.name as favorite from USERS LEFT JOIN PRODUCTS ON USERS.favprod = PRODUCTS.id";
con.query(joinquerylsql,function(err, res){
    if (err) throw err;
    console.log("Users are ");
    console.log(res);
});

//Query with right join
const joinqueryrsql = "SELECT USERS.username as user, PRODUCTS.name as favorite from USERS RIGHT JOIN PRODUCTS ON USERS.favprod = PRODUCTS.id";
con.query(joinqueryrsql,function(err, res){
    if (err) throw err;
    console.log("Products are ");
    console.log(res);
});

//Update rows
const updatesql = "UPDATE CUSTOMERS SET address = 'Toronto, Canada' WHERE name = 'Tedda Putta'";
con.query(updatesql, function(err, res){
    if (err) throw err;
    console.log('Response for Update query')
    console.log(res);
})

//Delete row from table
const name = "Mia";
const delsql = "DELETE FROM customers where name = " + mysql.escape(name);
con.query(delsql, function(err, res){
    if (err) throw err;
    console.log("Data deleted. No of rows deleted =  " + res.affectedRows);
});

//Query remaining rows
const queryrsql = "SELECT * FROM CUSTOMERS ORDER BY NAME DESC";
    con.query(queryrsql, function(err, res){
        if (err) throw err;
        console.log("Remaining data ");
        console.log(res);
    });

//Drop table
const dropsql = "DROP TABLE CUSTOMERS";
con.query(dropsql, function(err, res){
    if (err) throw err;
    console.log("Table CUSTOMERS dropped");
});

//Drop table if exists -- trying to delete already deleted table does not result in err
const delexistssql = "DROP TABLE IF EXISTS CUSTOMERS";
con.query(delexistssql, function(err, res){
    if (err) throw err;
    console.log("Response from attempting to drop a table that does not exist ")
    console.log(res);
});
const deluexistssql = "DROP TABLE IF EXISTS USERS";
con.query(deluexistssql, function(err, res){
    if (err) throw err;
    console.log("Response from attempting to drop a table")
    console.log(res);
});
const delpexistssql = "DROP TABLE IF EXISTS PRODUCTS";
con.query(delpexistssql, function(err, res){
    if (err) throw err;
    console.log("Response from attempting to drop a table ")
    console.log(res);
});