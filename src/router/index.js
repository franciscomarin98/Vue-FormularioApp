import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'CallMe',
    path: '/forms/call-me',
    component: () => import(/* webpackChunkName: 'callme' */ '../views/CallMe')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
