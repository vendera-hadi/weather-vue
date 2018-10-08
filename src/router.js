import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
// import Search from './components/Search.vue'
// import Detail from './components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    // { path: 'search', name: 'Search', component: Search },
    // { path: 'weather', name: 'Detail', component: Detail },
  ]
})
