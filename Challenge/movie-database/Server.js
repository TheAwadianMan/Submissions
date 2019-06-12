const express = require('express');

const port = 3000;

const app = express();

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

app.get('/', function(req, res) {
    console.log(req)
    console.log(res)
    res.send({message:"ok", status:"yay", id:1});
})
app.get('/hello/:x' , function(req, res) {
    console.log(req)
    console.log(res)
    const n= req.query.name;
    res.send({url:req.url, query:n, paramater:req.params.x});
})
