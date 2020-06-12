import axios from 'axios'


Vue.use({
    install(Vue) {
      Vue.prototype.$http = axios
    }
})