<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <PageHeader header-text="OpenAi Dall-E Image Generator" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }

  nav a {
    display: flex;
    padding: 12px 4px;
    font-size: 16px;
    text-decoration: none;
  }
</style>
