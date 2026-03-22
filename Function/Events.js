function click(element)
{
    return new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
        console.log(element+" : Click Successfully");
        resolve();
    },2000)
    })
}
function type(element,textToEnter)
{
    return new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
        console.log(element+" : type- :" +textToEnter+ " Successfully" );
    },1000)
    })
}

//1. click login link
//2. Enter Username
//3. Enter Password
//4. Click on Sign In Button
//5. Click on Profile Link

click("login link").then(()=>{type("username","Vibhavari")})
.then(()=>{type("password","vibha123")})
.then(()=>{click("sign in button")})
.then(()=>{click("profile link")})
.catch(()=>{
    console.log("issue in automation process")
});

//every function in playwright return promise

//await-always use with async function
//waiting a promise to resolve or reject


async function userLogin()
{
    try{
    await type("username","Vibhavari");
    await type("password","vibha123");
    await click("sign in button");
    }
    catch(e)
    {
        console.log(e);
    }
}

