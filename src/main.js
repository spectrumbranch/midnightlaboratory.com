import Vue from 'vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { 
	faFacebookSquare,
	faInstagram,
  faTwitterSquare,
  faTwitch
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
library.add(faFacebookSquare)
library.add(faInstagram)
library.add(faTwitterSquare)
library.add(faTwitch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// This App
import App from './App.vue'
import router from './router'
import store from './store'
import appConfig from './app-config'

// GTAG
import VueGtag from "vue-gtag";

if (appConfig.gtagId) {
  Vue.use(VueGtag, {
    config: { id: appConfig.gtagId }
  }, router);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
