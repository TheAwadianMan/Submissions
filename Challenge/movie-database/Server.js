const express = require('express');

const port = 3000;

const app = express();

//Below is a global variable contained within an array that lists out the movies we want to workin with//
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

//general route which defines the request and resend functions in terms of how we work with the server//
app.get('/', function(req, res) {
    console.log(req)
    console.log(res)
    res.send({message:"ok", status:"yay", id:1});
});

//route in which the url test is  invoked that defines the resend parameters//
app.get('/test', function(req, res) {
    console.log(req)
    console.log(res)
    res.send({message:"ok", status:200, id:1});
});

//time route in which the time is defined within the local host//
app.get('/time', function(req, res) {
    console.log(req)
    console.log(res)
    var time = new Date();
     var message= time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    res.send({message:message, status:200, id:1})

});

//route in which the variable Id is any data that the user may want to put within the local host//
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

//route which specifies a data that the user want to get from the database//
app.get("/search", function(req, res) {

  var search = req.query.s;
  if (search !== "") {
    res.send({ status: 200, message: "ok", data: search});
  } else {
    res.send({status: 500, error: "true", message: "you have to provide a search"});
  }
});

//route which lists the availabele movies written down in the array//
app.get("/movies/read", function(req, res) {
  res.send({status: 200, data: movies});
});
    
//general route that defines a global function alongside a variable that contains general parameters//
app.get('/hello/:x' , function(req, res) {
    console.log(req)
    console.log(res)
    const n= req.query.name;
    res.send({url:req.url, query:n, paramater:req.params.x});
});

//route that enable us to filter out the library of movies by their release dates//
app.get("/movies/read/by-date", function(req, res) {
  res.send({status: 200, data: movies.sort(function(a,b) {
      return (b.year) - (a.year); })
  })
});

//route that filter out the library of movies based on their ratings by the users//
app.get("/movies/read/by-rating", function(req, res) {
  res.send({status: 200, data: movies.sort(function(a,b) {
      return (b.rating) - (a.rating); })
  })
});

//route that filter out the library of movies based on their titles by alphabetical order//
app.get("/movies/read/by-title", function(req, res) {
  res.send({ status: 200,data: movies.sort(function(a,b) {
      var Title1 = a.title.toUpperCase();
      var Title2 = b.title.toUpperCase();
 if(Title1 < Title2) {
  return -1
} else if(Title1 > Title2) {
  return 1
} else {
  return 0 }
})
})
});

//general route in which defines whether a movie exists in the library database or not//
app.get("/movies/read/id/:id", function(req, res) {
  const id = parseInt(req.params.id);
  console.log(id);

  if(id <= movies.length && id > 0) {
    res.send({status: 200, data: movies[id-1]
    })
  } else {
    res.send({status: 404, error: 'true', message:'the movie ' + id + ' does not exist'})
    }
});

//general route which defines the parameters in terms of creating a database for movies//
app.get("/movies/create", function(req, res) {
    const Title = req.query.title;
    const Year = req.query.year;
    const Rating = req.query.rating;
    if(!Title || !Year || isNaN(Year) || Year.length != 4) {
      res.status(403).send({
        status: 403,
        error: 'true',
        message:'you cannot create a movie without providing a title and a year'
      })
    } else {
      movies.push({title: Title, year: parseInt(Year), rating: parseInt((Rating >= 0 && Rating <= 10 && Rating != '') ? Rating : 4)})
      res.send({status: 200, message: 'ok', data: movies})
    }
});

//route which enable us to delete movies from the database//
app.get("/movies/delete/:id?", function(req, res) {
  const Id = req.params.id

  if(Id && Id <= movies.length){
    movies.splice(ID - 1,1)
    res.send(movies)
  }else{
    res.send({status:404, error:true, message: `the movie ${ID} does not exist`})
  }
});


//route which enable us to update the library containing the movie database//
app.get('/movies/update/:ID',function(req,res) {
  var idexist=req.params.ID
  var newtitle=req.query.title
  var newyear=req.query.year
  var newrating=req.query.rating

  if(idexist>0 && idexist<movies.length){
      if(newtitle!=movies[idexist].title){
          movies[idexist].title=newtitle;
      }
      else if(newyear!=movies[idexist].year){ 
           movies[idexist].year=newyear;
      }
      else if(newrating!=movies[idexist].rating){
           movies[idexist].rating=newrating;
      }
  res.send({status:200, message: movies})
  }        
      
  else{    
       res.send({error:true, message:'ID not exist'})
      }
  
})
//global function which specifies on which port we are hosting the website//
app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });