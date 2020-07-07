//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VuePlyr from 'vue-plyr'
//import store from './store/store'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./plugins/axios"
 
//Vue.config.productionTip = false

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

Vue.use(router, axios, VueAxios,Vuex)


Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ['ended']
})

const vue = new Vue({
  router,
  //store,
  i18n,
  axios,
  VueAxios,
  Vuex,
  render: function (h) { return h(App) }
})

Vue.prototype.$eventBus = vue;
vue.$mount('#app')

