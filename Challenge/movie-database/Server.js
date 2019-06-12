const express = require('express');

const port = 3000;

const app = express();


app.get('/', function(req, res) {
    console.log(req)
    console.log(res)
    res.send({message:"ok", status:"yay", id:1});
});


app.get('/test', function(req, res) {
    console.log(req)
    console.log(res)
    res.send({message:"ok", status:200, id:1});
});

app.get('/time', function(req, res) {
    console.log(req)
    console.log(res)
    var time = new Date();
     var message= time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    res.send({message:message, status:200, id:1})

});

app.get("/hello/:Id?", function(req, res) {
    console.log(req)
    console.log(res)
  var Id = req.params.Id;
  function check() {
    if (Id == undefined) {
      return "";}
     else {
      return Id;}
  }
  res.send({ status:200, message:"Hello " + check() });

});

app.get("/search", function(req, res) {

  var search = req.query.s;
  if (search !== "") {
    res.send({ status: 200, message: "ok", data: search});
  } else {
    res.send({status: 500, error: "true", message: "you have to provide a search"});
  }
});
    
app.get('/hello/:x' , function(req, res) {
    console.log(req)
    console.log(res)
    const n= req.query.name;
    res.send({url:req.url, query:n, paramater:req.params.x});
});

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });