import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'
import Active from './views/Active.vue'
import Done from './views/Done.vue'

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
      component: Active
    },
    {
      path: '/done',
      name: 'done',
      component: Done
    }
  ]
})
