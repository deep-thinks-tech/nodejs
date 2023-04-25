const http = require('http');
const url = require('url');
const fs = require('fs');
const { resolveSoa } = require('dns');

//Get the URL path from browser
http.createServer(function(req, res){
    const requrl = url.parse(req.url, true);
    const filename = "." + requrl.pathname; //returns ./summer.html
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead('404', {'Content-Type':'text/html'});
            res.write("404 Not Found");
            return res.end();
        }
        res.writeHead('200',{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8002);
console.log("http://localhost:8002/thisispath.html OR http://localhost:8002/summer.html OR http://localhost:8002/winter.html");


