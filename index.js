var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(path.join(__dirname, 'Script')));
app.use(express.static(path.join(__dirname, 'Views')));

app.get('/Home',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

// $.ajax({ url: 'installation.html'
//      , type: 'GET'
//      , dataType: 'html'
//     })
// .done(function(data) {
//   $('.row').html(data);
// })
// .fail(function() {
//   console.log("Something went wrong!");
// });

app.get('/install',function(req,res){
  res.sendFile(path.join(__dirname+'/Views/installation.html'));
});

app.get('/data',function(req,res){
  res.sendFile(path.join(__dirname+'/Views/dataImport.html'));
});

app.get('/api',function(req,res){
  res.sendFile(path.join(__dirname+'/Views/api.html'));
});

app.listen(3000);

console.log("Running at Port 3000");
