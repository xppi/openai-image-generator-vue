import { test, expect } from '@playwright/test';
import Config from '../test-helper';

test('test page elements', async ({ page }) => {
  await page.goto(Config.homepageURL);
  const mainHeading = page.getByRole('heading', { level: 1 })

  await expect(mainHeading).toHaveText('OpenAi DALL·E Image Generator')
});