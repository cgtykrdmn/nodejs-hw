const http = require("http");

const server = http.createServer((req, res)=> {

    const url = req.url;
    console.log(url);

    if(url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>INDEX PAGE</h1>");
        res.write("<h2>INDEX PAGE-xxx</h2>");
        res.write("<h2>INDEX PAGE-xxxx</h2>");
    }
    else if ( url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>ABOUT PAGE</h1>");
        res.write("<h2>ABOUT PAGE-xxx</h2>");
        res.write("<h2>ABOUT PAGE-xxxx</h2>");
    }
    else if ( url === "/communication") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>COMMUNICATION PAGE</h1>");
        res.write("<h2>COMMUNICATION PAGE-xxx</h2>");
        res.write("<h2>COMMUNICATION PAGE-xxxx</h2>");
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 NOT FOUND</h1>");
    }

    res.end();
});

const port = 3000; // port 5000 already in use

server.listen(port, ()=> {

    console.log(`${port} has been started.`);

});

