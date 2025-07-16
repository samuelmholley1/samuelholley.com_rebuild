
import { test, expect } from '@playwright/test';
const targetUrl = process.env.VERCEL_URL || 'http://localhost:3000';

test('Debug Test: Capture Homepage State', async ({ page }) => {
  try {
    // Navigate to the live page and wait for the network to be mostly idle.
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 15000 });

    // Assert that the main headline is visible.
    const mainHeading = page.getByRole('heading', { name: "AI Isn't the Threat. Overwhelm Is." });
    await expect(mainHeading).toBeVisible({ timeout: 5000 });
    // Assert that the Navbar's logo is visible.
    const logo = page.getByRole('img', { name: 'Samuel Holley Logo' });
    await expect(logo).toBeVisible();
  } catch (error) {
    // If any of the above assertions fail, this block will execute.
    console.error("Test failed. Capturing page state for debugging...");

    // 1. Take a screenshot of the full page.
    // This will be saved as an artifact in the GitHub Actions run.
    await page.screenshot({ path: 'test-results/failure-screenshot.png', fullPage: true });
    // 2. Dump the full HTML of the page as seen by the browser.
    const pageHtml = await page.content();
    console.log("--- START OF CAPTURED HTML ---");
    console.log(pageHtml);
    console.log("--- END OF CAPTURED HTML ---");
    // Re-throw the error so the test still correctly reports a failure.
    throw error;
  }
});
