var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var filename = 'index.html';
var htmlBuf = new Buffer(fs.readFileSync(filename), 'utf-8');

app.get('/', function(request, response) {
  response.send(htmlBuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
