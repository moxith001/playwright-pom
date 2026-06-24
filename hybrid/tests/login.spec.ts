import { expect, test } from  '@playwright/test'
import { LoginPage } from '../page/login.page';

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('student', 'Password123');

  await expect(page).toHaveURL(/\/logged-in-successfully/);
  await expect(page.locator('strong', { hasText: 'Congratulations student.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});


test('login with Invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('student', 'Password')

});