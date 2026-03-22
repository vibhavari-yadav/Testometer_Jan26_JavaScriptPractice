//inbuilt function

function printMyName()
{
    console.log("Vibhavari Yadav");
}
function printChildrenName()
{
    console.log("Prisha and Krishna");
}
setTimeout(()=>
    {
        printMyName();
        printChildrenName(); //callback function when i finished call me back
    },5000); //execute function after 5000 ms
