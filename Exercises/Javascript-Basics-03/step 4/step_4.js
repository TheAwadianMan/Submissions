var button = document.querySelector("button");
var pass = document.querySelector("#password");
var conf = document.querySelector("#confirmation");

function checkPass(){
    if(pass.value != conf.value){
        pass.style.borderColor = "red";
        conf.style.borderColor = "red";
    }else{
        pass.style.borderColor = "green";
        conf.style.borderColor = "green";
    }
}

button.onclick = function(){
    checkPass();
}