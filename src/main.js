import App from './App.vue'
import router from './router'
import i18n from './i18n'
import axios from 'axios'
import "./plugins/axios"
import { store } from './plugins/store'
import VueCookies from "vue-cookies"

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
      let f = function (evt) {
          if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
          }
      }
      window.addEventListener('scroll', f)
  }
})

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(router, axios, VueCookies)

const vue = new Vue({
  router,
  i18n,
  axios,
  store,
  VueCookies,
  render: function (h) { return h(App) }
})

Vue.prototype.$eventBus = vue;
vue.$mount('#app')

