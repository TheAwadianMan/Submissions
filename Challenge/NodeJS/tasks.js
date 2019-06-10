/* Step 1: Testing the software code ==> Type Hello
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello!');
}).listen(8080); 

Type Quit
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Quit');
}).listen(8080); */


/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var arr = ["M-16", "AK-47", "PpsH", "Mg42", "FAMAS"];
function onDataReceived(text) {
  var l= text.length;

var argument= text.split(' ');

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }

  else if(argument[0] === 'hello' || text === 'hello\n') {
    hello(argument);
  }
else if(text === 'list\n') {
  list();
} 

else if(text.trim().slice(0,3)  === 'add') {
  add(text,l);
}

else if(text === 'help\n'){
 help();
 }

else{
    unknownCommand(text);
  }
 




/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(parameter){
  console.log(parameter.join(" ").replace("\n", "!"))
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/*this function is used to list all the available commands that the user can use on node which are hello exit quit and unknown command*/
function help() {
console.log('If you write the word "Hello"+ a series of other words you can receive multiple commands\nYou\nexit\nunknown command\n')
}

/*We create a loop to list the strings contained within the array simultaneously*/
function list(text) {
  for (var i=0 ; i<arr.length; i++) {
    console.log((i+1)+')'+arr[i])
  }
}

/*We create an ADD function to that enables us to add a task*/
function add(text,length) {
  if (length>5) {
    arr.push(text.trim().substring(4,length))
  }
  else {
    console.log("error")
  }}}


// The following line starts the application
startApp("Omar Awad");
