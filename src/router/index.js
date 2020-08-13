//import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//global.Vue = Vue

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
    path: '/news/:id-:title',
    name: 'newsdetail',
    component: () => import( /* webpackChunkName: "news-group" */ '../views/NewsDetail.vue'),
    props: (route) => ({ query: route.query.news })
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import( /* webpackChunkName: "institutional-group" */ '../views/Faqs.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import( /* webpackChunkName: "institutional-group" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/bloco-b',
    name: 'menu',
    component: () => import('../views/BlocoBCategories.vue')
  },
  {
    path: '/bloco-b/category/:category',
    name: 'menuCategories',
    component: () => import('../views/BlocoBCategories.vue'), 
    props: (route) => ({ query: route.query.category }) 
  },
  {
    path: '/bloco-b/category/:category/collection/:collection',
    name: 'listpage',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/BlocoB.vue')
  },
  {
    path: '/bloco-b/category/:category/collection/:collection/:id:id/:name:name',
    name: 'productDetail',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/DetailPage.vue')
  },
  {
    path: '/bloco-b/category/:category/collection/:collection/id/:id/name/:name/variant/variant-ref',
    name: 'variantDetail',
    component: () => import( /* webpackChunkName: "product-group" */ '../views/ProductPage.vue'), 
    props: (route) => ({ query: route.query.variant }) 
  },
  { 
    path: '/search/:term', 
    name: 'searchterm',
    component: () => import('../components/subcomponents/ModalSearch.vue'), 
    props: (route) => ({ query: route.query.term }) 
  },
  { 
    path: '/search/', 
    name: 'search',
    component: () => import('../components/subcomponents/ModalSearch.vue')
  },
  {
    path: '/recovery',
    name: 'recovery',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountRecovery.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountRegister.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import( /* webpackChunkName: "account-group" */ '../views/AccountInfo.vue'),
    meta: { requiresAuth: true } // a meta field

  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import( /* webpackChunkName: "shopping-group" */ '../views/ShoppingCart.vue'),
    meta: { requiresAuth: true } // a meta field
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeResolve((to, from, next) => {
  if ( to.name ) {
      //this.name = to.name
      console.log( "router name - "+to.name )
  }
  next()
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'shoppingcart' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

router.afterEach((to, from) => {
    console.log( "router - after link" )
})

export default router