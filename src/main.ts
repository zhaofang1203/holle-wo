import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
const user = sessionStorage.getItem('holle-wo')
if (user) {
  axios.defaults.headers.common.Authorization = 'Bearer' + JSON.parse(user).token
}
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
