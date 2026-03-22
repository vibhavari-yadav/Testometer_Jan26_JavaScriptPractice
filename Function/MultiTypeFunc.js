//call function inside function in multiple way

function printValueInStart(str)
{
    console.log("******************");
    console.log(str);
    console.log("******************");
}
function printValueInHash(str)
{
    console.log("##################");
    console.log(str);
    console.log("##################");
}
function addAndPrint(c,d,func) //function can be pass as parameter
{
     e=c+d;
   func(e);
}
printValueInHash("vibha");
//####################################
//vibha
//##################################
let a=10;
let b=20;
addAndPrint(a,b,printValueInHash);
//##################
//30
//##################
