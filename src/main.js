import { createApp } from 'vue'
//Import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faBars)

import App from './App.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')