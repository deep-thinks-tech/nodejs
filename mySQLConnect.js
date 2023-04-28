const mySQLcon = require('mysql');

const con = mySQLcon.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLrootpwd"
}    
);

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
});

con.query('CREATE DATABASE deepDB', function(err, res){
    if (err) throw err;
    console.log("Database deepDB created");
})
