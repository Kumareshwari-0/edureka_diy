import { sum } from "./operation.js";
console.log(sum(10,20));

import { minus } from "./operation.js";
console.log(minus(13,90))

console.log("Module function was declared above");

var y="global scope";
function ShowMe(){
    var x="functional scope";
    console.log("I found that x is in"+" :" +x);
}
ShowMe();
console.log("i found that y is in"+" :"+y);

function Me()
{
    let x="x was declared as a local scope";
    console.log(x);
}
Me();

var k="LEXICAL VARIABLE";
function chummaFunction(){
    console.log("Accessing variable outside the function"+":"+k);
}
chummaFunction();