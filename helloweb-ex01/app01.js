const http = require('http');   //  core module

const port = 8080;
const server = http.createServer(function(req,resp){
    resp.writeHead(200,{
        'Content-Type' : 'text/html'
    });
    resp.end('<h1>Hello Web</h1>');
    console.log("request!");
});
server.listen(port,function() {
    console.log(`Http Server running on port ${port}`);
});