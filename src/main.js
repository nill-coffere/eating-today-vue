import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './utils/rem.js'

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://192.168.3.13:7002/'

// Request Interceptor
axios.interceptors.request.use(config => {
  if (config.url != "Login") {
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token')
  }
  return config
})

// Response Interceptor
axios.interceptors.response.use(res => {
  return res
},
  error => {
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
