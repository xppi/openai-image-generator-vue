import { Configuration, OpenAIApi } from 'openai'

const configuration: Configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

configuration.baseOptions.headers = {
  Authorization: "Bearer " + "YOURE_OPENAI_KEY",
};

const openaiApi: OpenAIApi = new OpenAIApi(configuration)

export { openaiApi }
