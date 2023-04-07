import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// import target languages
import en from './i18n/en'
import de from './i18n/de'

import './assets/main.css'

// Type-define 'en' as the master schema for the locales
type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'de'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})

const nordTheme = {
  dark: true,
  colors: {
    background: '#2e3440',
    surface: '#2e3440',
    primary: '#88c0d0',
    'primary-darken-1': '#8fbcbb',
    secondary: '#81a1c1',
    'secondary-darken-1': '#5e81ac',
    error: '#bf616a',
    info: '#ebcb8b',
    success: '#a3be8c',
    warning: '#d08770',
  }
}

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'nordTheme',
    themes: {
      nordTheme,
    }
  }
})

app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
