import { test, expect } from '@playwright/test';

// We will set the VERCEL_URL in the GitHub Action. It defaults to localhost for local testing.
const targetUrl = process.env.VERCEL_URL || 'http://localhost:3000';

test('Smoke Test: Homepage Loads and Core Elements are Visible', async ({ page }) => {
  // 1. Navigate to the live page. Test will fail if the page doesn't load.
  await page.goto(targetUrl);

  // 2. Assert that the main headline is visible.
  // This confirms the main content of the page is rendering.
  const mainHeading = page.getByRole('heading', { name: "AI Isn't the Threat. Overwhelm Is." });
  await expect(mainHeading).toBeVisible({ timeout: 10000 }); // Wait up to 10s for content to appear

  // 3. Assert that the Navbar's logo is visible.
  // This confirms the global layout and branding are present.
  const logo = page.getByRole('img', { name: 'Samuel Holley Logo' });
  await expect(logo).toBeVisible();
});
