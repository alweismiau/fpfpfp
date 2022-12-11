import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router";
import { initializeApp } from "firebase/app";

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({store}) => {
    store.router =  markRaw(router);
})

// createApp(App).mount('#app')
app.use(pinia)
app.use(router)
app.mount('#app')
