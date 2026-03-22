//promises : i will 100% gives you result
//success,failure4
//3 state success-fullfilled, failure - rejected,pending

let k= new Promise((resolve,reject)=>
{
    let coffeAvailable=true;
    if(coffeAvailable)
        resolve();
    else
        reject();
})

//then- success
//catch- fail
//finally -always executed
k.then(()=>
{
    console.log("Success");
}).catch(()=>
{
    console.log("Failure");
})
function placeOrder(coffeeName,acceptOrder,orderPrepare,orderDelivery,orderDispatched)
{
    console.log("1. Coffee: "+coffeeName+ " Order Placed for Cafe-A");
    acceptOrder(coffeeName,orderPrepare,orderDelivery,orderDispatched);
}

function acceptOrder(coffeeName,orderPrepare,orderDelivery,orderDispatched)
{
   setTimeout(()=>
    {
    console.log("2. Coffee: "+coffeeName+" Order has been placed");
    orderPrepare(coffeeName,orderDelivery,orderDispatched);
    }
            ,1000);
}

function orderPrepare(coffeeName,orderDelivery,orderDispatched)
{
    setTimeout(()=>
    {
          console.log("3. Coffee: "+coffeeName+" Order is Ready");
          orderDelivery(coffeeName,orderDispatched);
    }
      ,6000);
}
 
function orderDelivery(coffeeName,orderDispatched)
{
    setTimeout(()=>
    {
          console.log("4. Coffee: "+coffeeName+" Order is Ready to Dispatched");
          orderDispatched(coffeeName);
    }
      ,2000);
}
function orderDispatched(coffeeName)
{
    setTimeout(()=>
    {
          console.log("5. Coffee: "+coffeeName+" Order is Dispatched");
    }
      ,3000);
}
let coffe="Americano";
placeOrder(coffe,acceptOrder,orderPrepare,orderDelivery,orderDispatched);

