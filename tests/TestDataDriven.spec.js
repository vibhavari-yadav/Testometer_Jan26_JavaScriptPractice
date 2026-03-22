import test, { expect } from "playwright/test";

//Test Data Driven Approach
import alldata from '../tests/login-data.json';//import json file that store login scenarios

test.describe('Invalid Login Scenarios',()=>
{
    test.beforeEach(async({page})=>
    {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    })
    //Scenario: 1
    for(const data of alldata)
    {
        test(`Verify User Able to Login Testcase in ${data.scenario}`,async({page})=>{
            await page.locator('//*[@id="username"]').fill(data.username);
            await page.locator('//*[@id="password"]').fill(data.password);
            await page.locator('//*[@id="submit"]').click();
            expect(page.locator('//*[@id="error"]')).toHaveText(data.errorMessage);
        });
    }
});