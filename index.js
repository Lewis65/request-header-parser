var express = require('express');
var app = express();
var accepts = require('accepts');
var util = require('util');

app.get('/', function(req, res){
    var ip = req.connection.remoteAddress;
    var languages = accepts(req).languages();
    var os = req.headers['user-agent'];
    
    if(ip.match(/::ffff:/)){
        ip = ip.slice(7);
    }
    os = os.slice(os.indexOf('(') + 1, os.indexOf(';'));

    res.end("<h1>Request Header Parser Microservice</h1>" +
    "<p><em>Your IP:</em> " + ip + "</p>" +
    "<p><em>Your browser language(s):</em> " + languages + "</p>" +
    "<p><em>Your OS:</em> " + os + "</p>");
})

app.listen(process.env.PORT || 8080);
