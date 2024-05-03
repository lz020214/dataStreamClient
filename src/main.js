import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8085"
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
 