const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');  //  request Dispatcher ?    , 미들웨어(use 사용)

const port = 8080;

const app = connect();
app.use(serveStatic(__dirname+ '/public'));  //  미들웨어(use 사용)(중간단계), __dirname 현재 프로젝트 위치
app.use(connectRoute(function(router){
    router.get("/", function(req,res){
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        })
        res.end("<h1>main</h1>");
    });

    //  /user?no=10
    router.get("/user", function(req,res){
        req.query = {};
        params = (req._parsedUrl.query || "").split("&");
        params.forEach(function(param){
            tokens = param.split("=");
            req.query[tokens[0]] = tokens[1];
        });
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        res.end(`<h1>user no : ${req.query.no} </h1>`);
    });


    router.get("/guestbook", function(req,res){
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        })
        res.end("<h1>guestbook</h1>");
    });
    router.get("/board", function(req,res){
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        })
        res.end("<h1>board list</h1>");
    });

    router.get("/board/:no", function(req,res){
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        })
        res.end(`<h1>board list (${req.params.no})</h1>`);
    });

}));
app.listen(port,function() {
    console.log(`Http Server running on port ${port}`);
});
