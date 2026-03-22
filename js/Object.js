//object in js show value in key-value pair
//JSON: Javascript object notation
const obj=
{
    name:"vibha",
    age:31,
    occupation:"QA Engineer",
    address:
    [
        {
            houseName: "home",
            pincode: 36572,
            country: "pune"
        },
         {
            houseName: "office",
            pincode: 36572,
            country: "kolhapur"
        } 
    ]
}
console.log(obj); //{ name: 'vibha', age: 31, occupation: 'QA Engineer' }
console.log(obj.name); //vibha
console.log(obj.address); 
//[{ houseName: 'home', pincode: 36572, country: 'pune' },
 // { houseName: 'office', pincode: 36572, country: 'kolhapur' }]//
console.log(obj.address[0]); //{ houseName: 'home', pincode: 36572, country: 'pune' }

