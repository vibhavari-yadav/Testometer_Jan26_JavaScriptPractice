import test, { expect } from "playwright/test";

//fixture page,browser,context,request
//hooks beforeEach,afterEach,beforeAll,afterAll


test.beforeEach(async({page})=>
{
await page.goto("https://practicetestautomation.com/practice-test-login/");
})
//Scenario: 1
test("Verify User Able to Login Testcase",async({page})=>{
    await page.locator('//*[@id="username"]').fill("student");
    await page.locator('//*[@id="password"]').fill("Password123");
    await page.locator('//*[@id="submit"]').click();
});

//Scenario: 2 
test("Verify User Able to See Error Message while Invalid Credential Testcase",async({page})=>{
    await page.locator('//*[@id="password"]').fill("d1232");
    await page.locator('//*[@id="submit"]').click();
    let errMessage="Your username is invalid!";
    expect(page.locator('//*[@id="error"]')).toHaveText(errMessage);
});

//Scenario: 3
test("Verify User Able to Login with Empty Credential Testcase",async({page})=>{
    await page.locator('//*[@id="username"]').fill("");
    await page.locator('//*[@id="password"]').fill("");
    await page.locator('//*[@id="submit"]').click();
    let errMessage="Your username is invalid!";
    expect(page.locator('//*[@id="error"]')).toHaveText(errMessage);
});