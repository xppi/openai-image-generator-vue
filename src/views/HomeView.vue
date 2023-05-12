<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { openaiApi } from '@/lib/openaiApi'
import Formats from '../lib/formats'
import ImageDisplay from '@/components/ImageDisplay.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorDisplay from '@/components/ErrorDisplay.vue'

const { t } = useI18n()
const MAX_PROMPT_LENGTH = 1000

const state = reactive({
  formats: Object.values(Formats),
  selectedOption: Formats.SMALL,
  prompt: '',
  imageUrl: '',
  isLoading: false,
  hasError: false,
  error: {},
  rules: {
    prompt: [(v: string | any[]) => v.length <= MAX_PROMPT_LENGTH || t('home_view.max_chars', { max: MAX_PROMPT_LENGTH })]
  }
})

const hasImage = computed(() => {
  return state.imageUrl.length > 0
})

const loadImage = async () => {
  try {
    state.isLoading = true
    state.imageUrl = ''
    const response = await openaiApi.createImage({
      prompt: state.prompt,
      n: 1,
      size: state.selectedOption,
      response_format: 'url'
    })

    if (response && response.status === 200) {
      state.isLoading = false
      state.imageUrl = response.data.data[0].url || ''
    }
    
  } catch (error: any) {
    state.isLoading = false
    state.hasError = true
    state.error = error.response
  }

}
</script>

<template>
  <main>
    <section class="promt">
      <VTextarea
        clearable 
        :label="$t('home_view.prompt')"
        :rules="state.rules.prompt"
        v-model="state.prompt"
      />
    </section>
    
    <section class="format">
      <VSelect
        :label="$t('home_view.choose_size')"
        :items="state.formats"
        v-model="state.selectedOption"
      />
    </section>

    <VBtn 
      variant="flat" 
      :disabled="state.isLoading || state.prompt.length < 1"
      @click="loadImage"
    >
      {{ t('home_view.generate_image') }}
    </VBtn>

    <section class="image-display">
      <LoadingSpinner v-if="state.isLoading" />
      <ImageDisplay v-if="hasImage" :imageUrl="state.imageUrl" />
      <ErrorDisplay
        v-if="state.hasError"
        :error="state.error"
      />
    </section>
  </main>
</template>

<style scoped>
.image-display {
  display: flex;
  margin-top: 10vh;
}

.image-display > .spinner-wrapper {
  margin: 0 auto;
}
</style>
