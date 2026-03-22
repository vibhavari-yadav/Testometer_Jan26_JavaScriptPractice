//function always hoisting

console.log(add(10,20));

function add(a,b)
{
    return a+b;
}


function scope()
{
    var a=10; //function level scope
    {
        let b=20; //block level scope
        const f=10; //block level scope
    }
    {
        let c=30; //block level scope
     //console.log(b); //not access to another block
    }

}
scope();
d=50; //global scope
console.log(d);
//console.log(a); //not accessible
