# openai-image-generator-vue

A small [VueJs](https://vuejs.org/) app to generate [OpenAi Dall.E2](https://openai.com/dall-e-2/) images.

![Example Image](/screenshot/yellow-duck.png?raw=true "Example Image")

## Setup

- Download/clone the project

- Get an [OpenAi API Key](https://beta.openai.com/docs/api-reference/authentication)

- Rename `.env.example` file to `.env` and use the API key there

- Install dependencies:

```sh
npm install
```

## Run

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Run via Docker

### Setup

- Download/clone the project

- Get an [OpenAi API Key](https://beta.openai.com/docs/api-reference/authentication)

- Rename `.env.example` file to `.env` and use the API key there

### Build image

```sh
docker build -d <image-name> .
```

### Run

```sh
docker run -it -p 8080:80 --rm --name <container-name> <image-name>
```

## Notes (some final)

- Uses [openai-node](https://github.com/openai/openai-node) Api version < 4.0.0.

- Proof-of-concept is done and I will not update this project any more. v0.3.3 ist the final one.
