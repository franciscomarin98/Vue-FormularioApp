import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'CallMe',
    path: '/',
    component: () => import(/* webpackChunkName: 'callme' */ '../views/CallMe')
  },
  {
    name: 'General',
    path: '/forms/general',
    component: () => import(/* webpackChunkName: 'general' */ '../views/General')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
