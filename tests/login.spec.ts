import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByPlaceholder('email').click();
    await page.getByPlaceholder('email').fill('ante@test.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByRole('button', { name: 'NEXT' }).click();
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('secret');
    await page.getByRole('button', { name: 'NEXT' }).click();
    await expect(page.locator('app-success')).toContainText('GREAT SUCCESS');
});