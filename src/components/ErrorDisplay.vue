<script setup lang="ts">
import { computed } from 'vue'
  const props = defineProps({
    error: { type: Object },
  })

  const readableError = computed(() => {
    return { 
      title: `errors.${props.error?.status.toString()}.title`,
      message: `errors.${props.error?.status.toString()}.message`
    }
  })
</script>

<template>
  <v-alert 
    type="error"
    :title="$t(readableError.title)"
    :text="$t(readableError.message)"
  />
</template>
