import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css' // This will be your Tailwind CSS file

const app = createApp(App)
app.use(router)
app.mount('#app')