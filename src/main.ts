import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import './assets/main.css'

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

app.use(router)
app.use(vuetify)

app.mount('#app')
