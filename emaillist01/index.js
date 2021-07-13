const express = require('express');
const http = require('http');   //  core module
const path = require('path');


// Router
const emaillistRouter = require('./routes/emaillist');

const port = 8080;

// Application Setup
const application = express()
    // 1. static serve
    .use(express.static(path.join(__dirname, "public")))
    // 2. request body parse
    .use(express.urlencoded({extended : true})) // application/x-www-form-urlencoded
    .use(express.json())                        // application/json


    // 2. view engine setup
    .set("views",path.join(__dirname,"views"))
    .set("view engine", 'ejs')
    // 3. request router
    .all("*", function(req, res, next) {
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', emaillistRouter)

// Server Setup
http.createServer(application)
    .on('listening',function() {
        console.info(`Http Server running on port ${port}`)
    }).on('error', function(error){
        if(error.syscall !== 'listen') {
            throw error;
        }
        switch(error.code) {
            case 'EACCESS' :
                console.info(`Port ${port} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE' :
                console.error(`Port ${port} is already in use`);
                process.exit(1);
                break;
            default :
                throw error;
        }
    }).listen(port);
