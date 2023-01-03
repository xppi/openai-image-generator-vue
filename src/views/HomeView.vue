<script setup lang="ts">
import { Configuration, OpenAIApi } from 'openai'
import { reactive, computed } from 'vue'
import Formats from '../lib/formats'
import ImageDisplay from '@/components/ImageDisplay.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const MAX_PROMPT_LENGTH = 1000

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const state = reactive({
  formats: Object.values(Formats),
  selectedOption: Formats.SMALL,
  prompt: '',
  imageUrl: '',
  isLoading: false,
  rules: {
    prompt: [(v: string | any[]) => v.length <= MAX_PROMPT_LENGTH || `Max ${MAX_PROMPT_LENGTH} characters`]
  }
})

const size = computed(() => {
  const sp = state.selectedOption.split('x')
  return sp[0]
})

const hasImage = computed(() => {
  return state.imageUrl.length > 0
})

const loadImage = async () => {
  try {
    state.isLoading = true
    const response = await openai.createImage({
      prompt: state.prompt,
      n: 1,
      size: state.selectedOption,
      response_format: 'url'
    })

    if (response && response.status === 200) {
      state.isLoading = false
      state.imageUrl = response.data.data[0].url || ''
    }
    
  } catch (error) {
    console.log('Something went horribly wrong:', error)
  }

}
</script>

<template>
  <main>
    <section class="promt">
      <VTextarea
        clearable 
        label='Please type your image description'
        :rules="state.rules.prompt"
        v-model="state.prompt"
      />
    </section>
    
    <section class="format">
      <VSelect
        label="Choose a size"
        :items="state.formats"
        v-model="state.selectedOption"
      />
    </section>

    <VBtn 
      variant="flat" 
      :disabled="state.isLoading || state.prompt.length < 1"
      @click="loadImage"
    >
      Load Image
    </VBtn>

    <section class="image-display" :style="{ width: `${size}px`}">
      <LoadingSpinner v-if="state.isLoading" />
      <ImageDisplay v-if="hasImage" :imageUrl="state.imageUrl" />
    </section>
  </main>
</template>
