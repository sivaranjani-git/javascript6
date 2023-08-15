//global scope
"use stict";
var a=10;
console.log(a);


function scope(){
    console.log(a);
}


//local scopes
//fuctional scopes
function local(b, b) {
  var  b = "local";
   console.log(b);
}
local();
//console.log(b);

//block scope

function block() {
    d="hello";
    {
    const b =  "block";
    console.log(b + "value of b");
    } 
}
block();
console.log(d);















