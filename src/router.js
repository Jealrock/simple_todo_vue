import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/active',
      name: 'active',
      component: () => import('./views/Active.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('./views/Done.vue')
    }
  ]
})
