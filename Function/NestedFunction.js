function multiplier(valuOfMultiply)
{
    let k=function returnValue(value)
    {
        return value*valuOfMultiply;
    }
    return k;
}

let double=multiplier(2);
let triple=multiplier(3);
console.log(double(4));
console.log(triple(3));