import type { Page } from "@playwright/test"

const Config = {
  homepageURL: 'http://localhost:5173/',
  openAiURL: 'https://api.openai.com/v1/images/generations',
  apiRoute: (page: Page) => page.route(Config.openAiURL, async route => {
    await route.fulfill({
      body: JSON.stringify({ data: [{ url: 'http://localhost/test-image.png' }] })
    })
  })
}

export default Config
