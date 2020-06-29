var express = require('express');
var app = express();
var server = require('http').Server(app);

//  Import files from source folder( css, js, assets)
app.use('/css', express.static(__dirname + '/css'));
app.use('/font', express.static(__dirname + '/font'));
app.use('/img', express.static(__dirname + '/img'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});