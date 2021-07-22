import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import Maska from 'maska'

createApp(App).use(router).use(Maska).mount('#app')
