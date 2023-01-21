import { test, expect } from '@playwright/test';
import Config from '../test-helper';

test.beforeEach(async ({ page }) => {
  await page.goto(Config.homepageURL);
})

test('test initial render of page elements', async ({ page }) => {
  const mainHeading = page.getByRole('heading', { level: 1 })
  const homeLink = page.getByRole('link', { name: 'Home' })
  const aboutLink = page.getByRole('link', { name: 'About' })
  const prompt = page.getByLabel('Please type your image description')
  const sizeSelection = page.getByLabel('Choose a size')
  const generateButton = page.getByRole('button', { name: 'Generate Image'})

  await expect(mainHeading).toHaveText('OpenAi DALL·E Image Generator')
  await expect(homeLink).toBeVisible()
  await expect(aboutLink).toBeVisible()
  await expect(prompt).toBeVisible()
  await expect(sizeSelection).toBeVisible()
  await expect(generateButton).toBeVisible()
  await expect(generateButton).toBeDisabled()
})
