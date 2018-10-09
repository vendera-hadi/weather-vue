import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Search from './components/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/weather/:id', name: 'Detail', component: Detail },
    { path: '/search/:keyword', name: 'Search', component: Search }
  ]
})
