//Arrays used to handle multiple data

let studentMarks=[60,70,57,60];
console.log(studentMarks[0]); //60
console.log(studentMarks[1]); //70
console.log(studentMarks[2]); //57

//changing indexing value
studentMarks[1]=90;
console.log(studentMarks);

//display length of array
console.log("Length of Array: "+studentMarks.length); //4

//add value at last
studentMarks.push(12);
console.log("After Push Array")
console.log(studentMarks); 
console.log("Length of Array: "+studentMarks.length); //5

//add value at start
studentMarks.unshift(1200);
console.log("After unshift Array")
console.log(studentMarks);

//remove last value
console.log("Before pop: "+studentMarks);
studentMarks.pop();
console.log("After pop: "+studentMarks);

//remove first value
console.log("Before shift: "+studentMarks);
studentMarks.shift();
console.log("After shift: "+studentMarks);

//splice function- remove in middle
//parameter: 1:index 2:deleted number count 3:add value
console.log("Before splice");
let mark=[1,2,3,4,5,6,7];
console.log(mark);
mark.splice(2,2,100);
console.log("After splice")
console.log(mark); //1,2,100,5,6,7


//sorting array
let array=[10,20,30,40,50,60];
console.log("Array");
console.log(array);
array.sort();
console.log("Sorting:  "+array);
array.reverse();
console.log("Reverse:  "+array);

console.log("Check vakue include");
array.includes(20); //true
array.includes(100); //false
console.log("Chcek index of value");
console.log(array.indexOf(30));//3
console.log(array.indexOf(100));//-1

//slice used to make changes in new array
let k=[1,2,3,4,5];
let sliced=k.slice(2,5);
console.log("slice"+sliced);

//concat function used to merge multiple array
let array1=[1,2];
let array2=[3,4];
let array3=[5,6,"vibha"];

let result=array1.concat(array2,array3);
console.log("Concatinated array: "+result);

//join 
let arr=[10,"March",1995];
let joinRes=arr.join("-");
console.log(joinRes);

//2D array- array within array
let arr1=[1,2];
console.log(arr1); //[1,2]
let arr2=[arr1,3];
console.log(arr2); //[[1,2],3]
let arr3=[-9,-2];
let arr4=[arr2,arr3];
console.log(arr4); //[[[1,2],3],[-9,-2]]

console.log(arr2[0][1]);

//flat- used to remove nested array and combine array into one

console.log(arr4.flat()); //[ [ 1, 2 ], 3, -9, -2 ]
console.log(arr4.flat(2));// [ 1, 2, 3, -9, -2 ]  merge into one

const arrayWithAChar=["akshay","anita"];
const arrayWithBChar=["Bhavika","bhim"];

const resultTwoArray=[arrayWithAChar,arrayWithBChar];
const res=resultTwoArray.flat();
console.log(resultTwoArray); //[ [ 'akshay', 'anita' ], [ 'Bhavika', 'bhim' ] ]
console.log(resultTwoArray.flat()); //[ 'akshay', 'anita', 'Bhavika', 'bhim' ]
console.log(res[2]); //Bhavika
console.log(resultTwoArray.flat(Infinity)); //flat till found 1D array





