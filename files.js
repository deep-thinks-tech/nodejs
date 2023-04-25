const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.writeFile('dummy1.html','<!DOCTYPE html><html><head><title>Dummy Page</title><meta name = "viewport" content = "width = device-width initial-scale = 1.0"></head><body><div class="container"><h1 style = "color: orangered">Hello Ted</h1></div></body></html>',function(err){
        if (err) throw err;
        console.log("New file created");
    });
    fs.readFile('dummy1.html', function(err, data){
        res.writeHead('200',{'Content-Type':'text/html'});
        if(err){
            throw err;
        } else{
            res.write(data);
        }
        return res.end();
    });
    fs.appendFile('dummy1.html','<br><p>Hello There</p>',function(err){
        if (err){
            throw err;
        }
        console.log('Written');
    });
    fs.rename('dummy1.html','dummy2.html',function(err){
        if (err) throw err;
        console.log('File renamed')
    });
    setTimeout(delFile,10000);

    function delFile() {
        fs.unlink('dummy2.html',function(err){
            if (err) throw err;
            console.log('File deleted');
        });
    }
    
}).listen(8001);
console.log("Server started at http://localhost:8001");