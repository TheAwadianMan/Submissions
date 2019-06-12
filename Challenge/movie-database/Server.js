const express = require('express');

const port = 3000;

const app = express();

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


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

app.get("/movies/read", function(req, res) {
  res.send({status: 200, data: movies});
});

app.get("/movies/read/by-date", function(req, res) {
  res.send({status: 200, data: movies.sort(function(a,b) {
      return (b.year) - (a.year); })
  })
});

app.get("/movies/read/by-rating", function(req, res) {
  res.send({
    status: 200,
    data: movies.sort(function(a,b) {
      return (b.rating) - (a.rating); })
  })
});



app.get("/movies/create", function(req, res) {
  TITLE = req.query.title
  YEAR = req.query.year
  RATING = req.query.rating
 
  const rating= (RATING ?  RATING :  "5")

  if(TITLE != undefined || YEAR != undefined || YEAR != NaN || YEAR.length != 4){
    movies.push({TITLE,YEAR, rating})
    res.send(movies)
  }else{
    res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
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