//import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//added to global Vue use
global.Vue = Vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bloco-b',
    name: 'bloco',
    component: () => import('../views/BlocoB.vue')
  },
  {
    path: '/bloco-b/:id-:name',
    name: 'product',
    component: () => import('../views/DetailPage.vue')
  },
  {
    path: '/productpage/:id',
    name: 'productdetail',
    // route level code-splitting
    // this generates a separate chunk (BInnovation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/b-explore',
    name: 'explore',
    component: () => import('../views/BExplore.vue')
  },
  {
    path: '/b-project',
    name: 'project',
    component: () => import('../views/BProject.vue')
  },
  {
    path: '/b-innovation',
    name: 'innovation',
    component: () => import('../views/BInnovation.vue')
  },
  //{ 
  //path: '/search', 
  //name: 'search',
  //component: () => import('../components/subcomponents/ModalSearch.vue'), 
  //props: (route) => ({ query: route.query.q }) },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/news/:id',
    name: 'newsdetail',
    //props: (route) => ({ query: route.query.q }),
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import('../views/Faqs.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/ShoppingCart.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {

    //     // if (savedPosition) {
    //     //   return savedPosition
    //     // } 
    //     // else if ( to.hash ) {
    //     //   return { selector: to.hash }
    //     // } 
    //     // else {
           return { x: 0, y: 0 }
    //     // }
    }
})

export default router