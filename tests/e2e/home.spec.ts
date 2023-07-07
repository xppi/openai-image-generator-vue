import { test, expect } from '@playwright/test';
import Config from '../test-helper';

test.beforeEach(async ({ page }) => {
  await page.goto(Config.homepageURL);
})

test('test initial render of page elements', async ({ page }) => {
  const mainHeading = page.getByRole('heading', { level: 1 })
  const homeLink = page.getByRole('link', { name: 'Home' })
  const aboutLink = page.getByRole('link', { name: 'About' })
  const prompt = page.getByLabel('Please type your image description', { exact: true })
  const sizeSelection = page.getByLabel('Choose image size')
  const generateButton = page.getByRole('button', { name: 'Generate Image'})

  await expect(mainHeading).toHaveText('OpenAi DALL·E Image Generator')
  await expect(homeLink).toBeVisible()
  await expect(aboutLink).toBeVisible()
  await expect(prompt).toBeVisible()
  await expect(sizeSelection).toBeVisible()
  await expect(generateButton).toBeVisible()
  await expect(generateButton).toBeDisabled()
})

test('navigate to about page', async ({ page }) => {
  const aboutLink = page.getByRole('link', { name: 'About' })
  await aboutLink.click()
  await expect(page).toHaveURL(/about/)
  await expect(page.getByRole('heading', { level: 4 })).toHaveText('DALL·E 2')
})

test('image generation workflow', async ({ page }) => {
  // Mock openAi Api request
  await Config.apiRoute(page)

  await page.getByLabel('Please type your image description', { exact: true }).click();
  await page.getByLabel('Please type your image description', { exact: true }).fill('A purple owl');
  await page.locator('.format > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input').click();
  await page.getByText('512x512').click();
  await page.getByRole('button', { name: 'Generate Image' }).click();

  await expect(page.getByAltText('Generated Image')).toBeVisible()
})
