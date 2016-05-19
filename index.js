var express = require('express');
var app = express();
var accepts = require('accepts');
var util = require('util');

app.get('/', function(req, res){
    var ip = req.connection.remoteAddress;
    var languages = accepts(req).languages();
    var os = req.headers['user-agent'];

    os = os.slice(os.indexOf('(') + 1, os.indexOf(';'));
    console.log(os);

    res.end("");
})

app.listen(process.env.PORT || 8080);
