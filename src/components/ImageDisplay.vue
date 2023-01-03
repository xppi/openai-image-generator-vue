<script setup lang="ts">
  const props = defineProps({
    imageUrl: { type: String },
  })
</script>

<template>
  <img :src="props.imageUrl" alt="Generated Image" />
</template>

<style>
</style>
