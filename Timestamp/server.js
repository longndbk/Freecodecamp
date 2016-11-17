var express = require('express');
var app = express();

app.get ('/', function(req, res){
  console.log("Hello world!");
});

app.listen(8800, function(){
  console.log("Example app listening port 8800");
});
