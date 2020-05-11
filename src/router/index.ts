import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/modules/index.vue'),
    children: [
      { path: '/', name: 'welcome', component: () => import(/* webpackChunkName: "about" */ '../views/modules/welcome/index.vue') },
      { path: '/article', name: 'article', component: () => import(/* webpackChunkName: "about" */ '../views/modules/article/index.vue') },
      { path: '/comment', name: 'comment', component: () => import(/* webpackChunkName: "about" */ '../views/modules/comment/index.vue') },
      { path: '/fans', name: 'fans', component: () => import(/* webpackChunkName: "about" */ '../views/modules/fans/index.vue') },
      { path: '/imange', name: 'imange', component: () => import(/* webpackChunkName: "about" */ '../views/modules/imange/index.vue') },
      { path: '/publish', name: 'publish', component: () => import(/* webpackChunkName: "about" */ '../views/modules/publish/index.vue') },
      { path: '/setting', name: 'setting', component: () => import(/* webpackChunkName: "about" */ '../views/modules/setting/index.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
