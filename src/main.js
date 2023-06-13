import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue'
import "./assets/css/tailwind.css"
import router from './router'



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
