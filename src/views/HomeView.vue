<script setup lang="ts">
import { Configuration, OpenAIApi } from 'openai'
import { reactive, computed } from 'vue'
import Formats from '../lib/formats'
import ImageDisplay from '@/components/ImageDisplay.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const state = reactive({
  formats: Formats,
  selectedOption: Formats.SMALL,
  prompt: '',
  imageUrl: '',
  isLoading: false,
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
   <section>
    <div>
      <label for="textPrompt">Input your Text:</label>
      <textarea id="textPrompt" v-model="state.prompt"></textarea>
    </div>

    <div>
      <label for="sizeSelection">Choose a size:</label>
      <select id="sizeSelection" v-model="state.selectedOption">
        <option 
          v-for="format in state.formats"
          :key="format"
          :value="format"
        >
          {{ format }}
        </option>
      </select>
    </div>

    <div>
      <button @click="loadImage">Load Image</button>
    </div>
   </section>

   <section class="image-display" :style="{ width: `${size}px`}">
    <LoadingSpinner v-if="state.isLoading" />
    <ImageDisplay v-if="hasImage" :imageUrl="state.imageUrl" />
   </section>
  </main>
</template>
