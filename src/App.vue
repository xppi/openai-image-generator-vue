<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <PageHeader :header-text="$t('page_header.text')" />
      <nav>
        <RouterLink to="/">
          {{ $t('navigation.home') }}
        </RouterLink>
        <RouterLink to="/about">
          {{ $t('navigation.about') }}
        </RouterLink>
        <LanguageSwitcher />
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
