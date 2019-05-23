var shoe_size =prompt("Size of shoe");
var birth_year =prompt("Year of birth");

function calc(){
    shoe_size *= 2;
    shoe_size += 5;
    shoe_size *= 50;
    shoe_size -= birth_year;
    alert(shoe_size);
}

calc();