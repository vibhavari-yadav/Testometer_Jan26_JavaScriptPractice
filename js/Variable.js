//js Dynamically typed language - datatype is defined at runtime
i=10;                   //datatype number global variable
console.log(i);
console.log(typeof i);

i="vibha";              //datatype string 
console.log(i);
console.log(typeof i);

i=false;                //datatype boolean
console.log(i);
console.log(typeof i);

//Types of Variable
//var- global variable function block scope
//let- blocked scope variable
// default value of variable is undefined

i=10;        //global scope

function scope()
{
    var k=10; 
    console.log(k);  //functional scope
}
scope();
// console.log(k);    //not access

//redefining variable is allowed but share latest value
v=30;
v=20;
 console.log(v);
