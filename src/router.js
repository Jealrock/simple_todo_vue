import Vue from 'vue'
import Router from 'vue-router'
import AllTodos from './views/AllTodos.vue'
import ActiveTodos from './views/ActiveTodos.vue'
import DoneTodos from './views/DoneTodos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllTodos
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveTodos
    },
    {
      path: '/done',
      name: 'done',
      component: DoneTodos
    }
  ]
})
