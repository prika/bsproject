import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
