import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//added to global Vue use
global.Vue = Vue

  const routes = [
  {
    path: '/',
    name: 'bloco_',
    component: Home
  },
  {
    path: '/institutional',
    name: 'stone inst',
    // route level code-splitting
    // this generates a separate chunk (BlocoB.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BlocoB" */ 
    component: () => import('../views/Institutional.vue')
  },
  {
    path: '/bloco-b',
    name: 'bloco',
    // route level code-splitting
    // this generates a separate chunk (BlocoB.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BlocoB" */ 
    component: () => import('../views/BlocoB.vue')
  },
  {
    path: '/b-explore',
    name: 'explore',
    // route level code-splitting
    // this generates a separate chunk (BExplore.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BExplore" */ 
    component: () => import('../views/BExplore.vue')
  },
  {
    path: '/b-project',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (BProject.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BProject" */ 
    component: () => import('../views/BProject.vue')
  },
  {
    path: '/b-innovation',
    name: 'innovation',
    // route level code-splitting
    // this generates a separate chunk (BInnovation.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BInnovation" */
    component: () => import('../views/BInnovation.vue')
  },
  {
    path: '/listpage/blocos',
    name: 'Blocos',
    // route level code-splitting
    // this generates a separate chunk (BInnovation.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "BInnovation" */ 
    component: () => import('../views/ListPage.vue')
  }

]

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } 
      else if ( to.hash ) {
        return { selector: to.hash }
      } 
      else {
        return { x: 0, y: 0 }
      }
    }
})

export default router
