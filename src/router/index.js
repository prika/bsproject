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
  {
    path: '/news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news-group" */ '../views/News.vue')
  },
  {
    path: '/news/:id',
    name: 'newsdetail',
    //props: (route) => ({ query: route.query.q }),
    component: () => import(  /* webpackChunkName: "news-group" */ '../views/NewsDetail.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import(  /* webpackChunkName: "institutional-group" */ '../views/Faqs.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import( /* webpackChunkName: "institutional-group" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/bloco-b',
    name: 'bloco',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/BlocoB.vue')
  },
  {
    path: '/bloco-b/:id-:name',
    name: 'product',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/DetailPage.vue')
  },
  {
    path: '/productpage/:id',
    name: 'productdetail',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/ProductPage.vue')
  },
  //{ 
  //path: '/search', 
  //name: 'search',
  //component: () => import('../components/subcomponents/ModalSearch.vue'), 
  //props: (route) => ({ query: route.query.q }) },
  {
    path: '/auth/recovery',
    name: 'recovery',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountRecovery.vue')
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountRegister.vue')
  },
  {
    path: '/auth/account',
    name: 'account',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountInfo.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import( /* webpackChunkName: "shooping-group" */ '../views/ShoppingCart.vue')
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