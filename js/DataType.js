//number, bigint, string, boolean, undefined, NaN
//number: number,float- maximum size of any type 64 bit

//literal way assignment
i=10;
console.log(i); //10
i=-10;
console.log(i); //-10
i=NaN;
console.log(i); //NaN
i=10.9;
console.log(i); //10.9
i=Infinity;
console.log(i); //Infinity
i=Number(10);
console.log(i); //10
i=Number("vibha");
console.log(i); //NaN
i=Number("10");  //content inside "" deside type not ""
console.log(i); //10


//parseInt

console.log("---Parse Int---"); 
i=parseInt(10);
console.log(i);     //10
b=parseInt("vibha");
console.log(b);     //NaN


console.log("---Variation---"); 
i=Number("10abc")
console.log(i); //NaN

//parseInt only return number start initial number
i=parseInt("10abc") //10
console.log(i);
i=parseInt("abc20") //NaN
console.log(i); 
i=parseInt("10.40abc40") //10 not consider floating
console.log(i);

//toFixed method4
i=10;
j=3;
k=i/j;

console.log(k.toFixed(2)); //3.33 print upto 2 decimal places

//Plus operator +
//append +
//js autoconvert string into integer
console.log("---Plus Operator---");
console.log("5"-2); //3
console.log("5"+2); //52  concat
console.log("5"*2); //10
console.log(2*"5"+14); //24
console.log("-5"-2); //-7

//MAX_SAFE_INTEGER not accept value more than 64 bit

i=638263617367812638126389127389612836189368163;
console.log(Number.MAX_SAFE_INTEGER);