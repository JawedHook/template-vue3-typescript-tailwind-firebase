import { createApp } from 'vue'

import './output.css'

import App from './App.vue'
import router from "./router"

import './plugins/firebase.plugin';

const app = createApp(App)
app.use(router)
app.mount('#app')
