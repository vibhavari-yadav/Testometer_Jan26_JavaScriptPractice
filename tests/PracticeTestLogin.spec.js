//Playwright codegen

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator('//*[@id="username"]').click();
  await page.locator('//*[@id="username"]').fill('student');
  await page.locator('//*[@id="password"]').click();
  await page.locator('//*[@id="password"]').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Selenium WebDriver: Selenium Automation Testing with Java' }).click();
  const page1 = await page1Promise;
});