import {createApp} from 'vue'
import App from './App.vue'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import routes from './routes'
import store from './store'

createApp(App)
.use(store)
.use(routes)
.mount('#app')
