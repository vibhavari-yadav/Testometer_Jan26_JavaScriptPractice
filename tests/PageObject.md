Page Object Model:
1. We have 20 Pages in Appllication
2. Each Page 1 Page Object Class
3. Eacf Page Object Class:

const {expect}=reuire('@playwright/test');
    -locators
    class LoginPage(page)
    {
        //initialize all the locators
        this.page=page;
        this.username= page.locator('//*[@id="username"]').fill("username");
        this.password= page.locator('//*[@id="password"]').fill("password");
        this.submit= page.locator('//*[@id="submit"]').click();
        this.errMsg=page.locator('//*[@id="error"]').toHaveText("Invalid Data..");
    }

    -modules
    async login(username,password)
    {
        //use all initialize variables
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }

    -actions
    async getErrorMsg(expectedMsg)
    {
        expect(this.errMsg).toHaveText(expectedMsg);
    }

    module.exports={LoginPage}

//import page object in another class
    const {LoginPage}=require('../tests/LoginPage');//import 
    const loginPage=new LoginPage(page);//creating object
    loginPage.login(data.username,data.password)//call function in another file
    loginPage.getErrorMsg(data.errMsg);