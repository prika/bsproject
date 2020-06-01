import Vue from 'vue'
import App from './App.vue'
import router from './router'   //  route links
import i18n from './i18n'       //  translations
import Vuex from 'vuex'
import VuePlyr from 'vue-plyr'  //  vue player videos

import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false

Vue.use(router, axios, VueAxios)

Vue.prototype.$eventBus = new Vue()

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ['ended']
})

// const newLocal = 'searchFor'
// Vue.filter(newLocal, function (value, searchString) {
//     var result = [];
//     if(!searchString){
//         return value;
//     }

//     searchString = searchString.trim().toLowerCase();

//     result = value.filter(function(item){
//         if(item.product.toLowerCase().indexOf(searchString) !== -1){
//             return item;
//         }
//     })
    
//     return result;
// })

new Vue({
  router,
  i18n,
  axios,
  VueAxios,
  render: function (h) { return h(App) }
}).$mount('#app')

