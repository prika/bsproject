import Vue from 'vue'
import App from './App.vue'
import router from './router'   //  route links
import i18n from './i18n'       //  translations
// import axios from 'axios'
// import VueAxios from 'vue-axios'
 
// Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
