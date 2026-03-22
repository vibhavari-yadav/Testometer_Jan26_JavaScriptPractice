//js is bloacking language

function hello()
{
console.log("I am in hello name block");
i=10;
}

{
    console.log("I am in no name block");
}

//function block
hello();
console.log(i);