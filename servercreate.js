const http = require('http');
const dt = require("./datetime.js")
const url = require('url');
http.createServer (function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Current date and time is " + dt.dateTime());
    res.write(`<br><br>`);
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.write(txt);
    res.end(`<br><br>`+ "Hello Ted");
    //res.end();
}).listen(8000);
console.log("Server is running on http://localhost:8000");
console.log('http://localhost:8000/?year=2017&month=July');