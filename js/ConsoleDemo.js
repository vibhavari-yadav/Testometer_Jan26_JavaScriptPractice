//basic 
console.log("Hello I am learning java script");
console.error("There is some Error");
console.warn("Hello,Missing something");

//Grouping
console.group("Employee Details");
console.log("Name: Vibhavari");
console.log("Age: 31");
console.log("Position: QA Engineer");
console.groupEnd();

//in tabular format only applicable with array of object
console.table([{Name:"Vibhavarai",Age:30,Position:"QA Engineer"}]);

//print string in parameter
name="Krishnaraj";
age=30;
console.log("My Name is "+ name+" My Age is "+age);
console.log("My Name is "+ name+" My Age is "+age);
console.log("My Name is "+ name+" My Age is "+age); 
console.log("My Name is ",name,"My Age is" ,age); 
console.log(`My Name is ${name} My Age is ${age}`);