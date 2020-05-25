import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

//added to global Vue use
global.Vue = Vue

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
   //component: Home
  },
  {
    path: '/institutional',
    name: 'Institutional',
    // route level code-splitting
    // this generates a separate chunk (BlocoB.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BlocoB" */ '../views/Institutional.vue')
  },
  {
    path: '/bloco-b',
    name: 'Bloco B',
    // route level code-splitting
    // this generates a separate chunk (BlocoB.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BlocoB" */ '../views/BlocoB.vue')
  },
  {
    path: '/b-explore',
    name: 'B Explore',
    // route level code-splitting
    // this generates a separate chunk (BExplore.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BExplore" */ '../views/BExplore.vue')
  },
  {
    path: '/b-project',
    name: 'B Project',
    // route level code-splitting
    // this generates a separate chunk (BProject.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BProject" */ '../views/BProject.vue')
  },
  {
    path: '/b-innovation',
    name: 'B Innovation',
    // route level code-splitting
    // this generates a separate chunk (BInnovation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BInnovation" */ '../views/BInnovation.vue')
  },
  {
    path: '/listpage/blocos',
    name: 'Blocos',
    // route level code-splitting
    // this generates a separate chunk (BInnovation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BInnovation" */ '../views/ListPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
