var http = require('http');
var fs = require('fs');
var file = 'index.html';


var cache = {};

var cache.index = fs.readFileSync(file,'utf8');

var server = http.createServer(function(req,res){
    console.log('got request');   
    res.end(text); 
});
server.listen(8080);