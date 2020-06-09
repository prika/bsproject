import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VuePlyr from 'vue-plyr'
//import store from './store/store'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.config.productionTip = false

Vue.use(router, axios, VueAxios, Vuex)

Vue.prototype.$eventBus = new Vue()

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ['ended']
})

new Vue({
  router,
  //store,
  i18n,
  axios,
  VueAxios,
  Vuex,
  render: function (h) { return h(App) }
}).$mount('#app')

