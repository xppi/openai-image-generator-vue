<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t, locale, availableLocales } = useI18n()
</script>

<template>
  <div class="language-switcher">
    <v-select
      v-model="locale"
      :items="availableLocales"
      :label="t('language_switcher.label')"
    />
  </div>
</template>

<style scoped>
  .language-switcher {
    display: flex;
    justify-content: flex-end;
    width: 160px;
  }
</style>
