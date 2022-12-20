import { test, expect } from '@playwright/test';

test('login page is rendered correctly in italian by default, and contains textfields username, password and submit button', async ({ page }) => {
  //go to index page "/"
  await page.goto('http://localhost:3000/login');

  // redirect to login page.
  const title = page.getByText('Login');
  await expect(title).toBeDefined()

  // check language IT
  const itLanguage = page.getByAltText('it');
  await expect(itLanguage).toBeDefined();

  // check username
  await expect(page.locator('id=username')).toBeDefined();

  // check password
  await expect(page.locator('id=password')).toBeDefined();  

  // check submit
  await expect(page.getByText('Entra')).toBeDefined();  

});


test('Login successful for user nicola/ditrani', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('id=username').fill('nicola');
  await page.locator('id=password').fill('ditrani');
  await page.getByText('Entra').click();
  const title = page.getByText('Dashboard')
  await expect(title).toBeDefined()
});

