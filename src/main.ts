import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import './global.css'
import VueTypewriterEffect from 'vue-typewriter-effect'
import { FluxJS } from '@pablotheblink/fluxjs'

const app = createApp(App)

.component("vue-typewriter-effect", VueTypewriterEffect)
.component('FluxJS', FluxJS)
app.use(router)
app.use(PrimeVue, { theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'system',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }})

app.mount('#app')
