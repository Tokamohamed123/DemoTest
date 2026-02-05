import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});