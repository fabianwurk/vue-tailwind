import { createApp } from 'vue'
import App from './App.vue'
import resize from "vue-element-resize-detector";
import './index.css'

createApp(App).mount('#app')
Vue.use(resize)