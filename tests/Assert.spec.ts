import { test, expect } from '@playwright/test';

test('to be present', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/add_remove_elements/');
  await expect(page.locator('[class="added-manually"]')).not.toHaveCount(2);

await page.close();
});