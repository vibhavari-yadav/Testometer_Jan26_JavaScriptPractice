//BigInt accept more range value 
// n mean BigInt

i=10n;
console.log(i); //10n
console.log(typeof i); //BigInt

i=78687162786387126873128937n;
i=i+1n;
console.log(i); //78687162786387126873128938n add 1 at last digit

i=BigInt(3564545654764674);
console.log(i); //3564545654764674n add n at last