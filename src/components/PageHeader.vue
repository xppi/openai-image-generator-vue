<script setup lang="ts">
defineProps({
  headerText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ headerText }}</h1>
</template>

<style scoped>
h1 {
  font-size: 64px;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size:24px
  }
}

@media screen and (min-width: 600px) {
  h1 {
    font-size:32px
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size:40px
  }
}

@media screen and (min-width: 992px) {
  h1 {
    font-size:64px
  }
}
</style>