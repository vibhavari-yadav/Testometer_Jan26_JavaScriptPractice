//use of zomato for ordering Coffee
//place order for coffee for cafe A
//Order Accepted by cafe A take 1 sec
//Order Preparation take 6 sec
//Delivery picked by person take 2 sec
//Dispatched order


//callback function : passing function as parameter says call me back once you done

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



