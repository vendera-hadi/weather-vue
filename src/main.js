import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')
