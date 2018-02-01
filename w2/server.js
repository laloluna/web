var express = require('express');
var PORT = 8080;

var app=express();
app.get('/', function(req,res)
	{
	res.sendfile('mapsLalo.html');
	}
);
app.listen(PORT);
console.log('Running in port ' + PORT);

