//var, let , const variables are hoisting 
//let and const are in temporal dead zone TDZ
//var - global no TDZ
//let,const- TDZ

//TDZ occur when variable defined but not initialized
let k;
console.log(k); //undefined

k=30;
console.log(k); 