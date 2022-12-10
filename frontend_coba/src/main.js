import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router";
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia()
const app = createApp(App)

// createApp(App).mount('#app')
app.use(pinia)
app.use(router)
app.mount('#app')
