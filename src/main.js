import { createApp } from 'vue'
//Import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faLinkedin, faFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass, faBars, faEnvelope, faPhone, faLocationDot, faTwitter, faLinkedin, faFacebook, faSquareTwitter)

import App from './App.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')