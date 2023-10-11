<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <header>
    <div class="wrapper ">
      <PageHeader class="rounded-lg text-center bg-grey" header-text="dawda" />
      <nav class="flex justify-center mt-10">
        <RouterLink to="/">
          {{ ('navigation.home') }}
        </RouterLink>
        <RouterLink to="/about">
          {{ 'navigation.about' }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
  }

  nav a {
    display: flex;
    padding: 12px 4px;
    font-size: 24px;
    margin-right: 12px
  }
</style>
