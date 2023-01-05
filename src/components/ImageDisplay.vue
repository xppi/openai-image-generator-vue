<script setup lang="ts">
  const props = defineProps({
    imageUrl: { type: String },
  })
</script>

<template>
  <img :src="props.imageUrl" alt="Generated Image" />
</template>

<style scoped>
  img {
    max-width: 100%;
    margin: 0 auto;
  }
</style>
