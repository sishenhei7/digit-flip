import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DigitFlip from '../lib'

Vue.config.productionTip = false

Vue.use(DigitFlip)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
