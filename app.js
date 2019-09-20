var express = require('express');
var app = express();
var path = require('path');
const date = require('date-and-time');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


  app.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    req.dt = new Date();
    next();
  });

  app.get("/reroute1", function(req, res, d){
    console.log('rerouted!!!!!!!' + req.dt);
    res.write("<b>Current Date and Time= "+date.format(req.dt, 'YYYY/MM/DD HH:mm:ss')+'</b>');
    res.end();
  }); 

  app.get("/reroute2", function(req, res, d){
    console.log('rerouted!!!!!!!' + req.dt);
    res.write("<b>Current Date and Time= "+date.format(req.dt, 'YYYY/MM/DD HH:mm:ss')+'</b>');
    res.end();
  }); 
 
app.listen(8080);
console.log("App started listening to port 8080")