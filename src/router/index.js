import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../components/Home.vue'
import Login from './../components/Login'
import TesteCrud from './../components/lab/TesteCrud'

import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  /*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ // '../views/About.vue')
  // },
  {
    path: '/lab/crud',
    name: 'lab-crud',
    component: TesteCrud,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('routes/index.js -> router.beforEach()')
  console.log(store)
  let tokenArmazenado = store.getters['auth/token']
  console.log(tokenArmazenado)

  if(to.matched.some(record => record.meta.requiresAuth)) {
    // rota protegida

    if(tokenArmazenado == null) {
      /*
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
      */
     next()
    } else {
      next()
    }

  } 
  /*
  else if(to.matched.some(record => record.meta.guest)) {
      next()
  } 
  */
  else {
    next()
  }
})

export default router
