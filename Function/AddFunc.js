//Function-Method--services
//add input2,perform addition,result

//add: function name
//a,b :input parameter while defining function
function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    return a/b;
}
function square(a)
{
    return multiply(a,a);
}
function pi()
{
    return pi=3.14;
}

//calculate area of circle
//pi*r*r
function areaOfCircle(a)
{
    return area=pi()*multiply(a,a);
}

//20,30 arguments while calling function
let ad=add(20,30);
console.log("Addition: " +ad);
let sub=subtract(80,30);
console.log("Subtraction: " +sub);
let mul=multiply(8,3);
console.log("Multiplication: "+mul);
let div=divide(8,2);
console.log("Division: "+div);
let sr=square(4,4);
console.log("Square: "+sr);
console.log("Area of Circle: " +areaOfCircle(2));

//Mathematical Formulas
function periSquare(a)
{
  return 4*a;
}
function periRectangle(l,w)
{
    return 2*(l+w)
}
function areaRectangle(l,w)
{
    return l*w;
}
console.log("Perimeter of square");
console.log(periSquare(3));
console.log("Perimeter of rectangle");
console.log(periRectangle(4,5));
console.log("Area of Rectangle");
console.log(areaRectangle(10,10));
