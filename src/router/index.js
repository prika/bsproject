import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//global.Vue = Vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'B Stone - Bloco Explore Project Innovation',
      metaTags: [
        {
          name: 'description',
          content: 'B group comprehends 4 diferent, yet complimentary companies and activities'
        },
        {
          property: 'og:description',
          content: 'B group comprehends 4 diferent, yet complimentary companies and activities'
        }
      ]
    }
  },
  {
    path: '/b-explore',
    name: 'explore',
    component: () => import( /* webpackChunkName: "pages" */ '../views/BExplore.vue'),
    meta: {
      title: 'B Explore Page',
      metaTags: [
        {
          name: 'description',
          content: 'B Explore Page'
        },
        {
          property: 'og:description',
          content: 'B Explore Page'
        }
      ]
    }
  },
  {
    path: '/b-project',
    name: 'project',
    component: () => import( /* webpackChunkName: "pages" */ '../views/BProject.vue'),
    meta: {
      title: 'B Project - B Stone Site',
      metaTags: [
        {
          name: 'description',
          content: 'B project can guarantee the entire marble process, from the first cut to your home. Formed by nature, which offers unique tones and characteristics, marble is the preferred choice in Architecture and Decoration.'
        },
        {
          property: 'og:description',
          content: 'B project can guarantee the entire marble process, from the first cut to your home. Formed by nature, which offers unique tones and characteristics, marble is the preferred choice in Architecture and Decoration.'
        }
      ]
    }

  },
  {
    path: '/b-innovation',
    name: 'innovation',
    component: () => import( /* webpackChunkName: "pages" */ '../views/BInnovation.vue'),
    meta: {
      title: 'B Innovation - B Stone Site',
      metaTags: [
        {
          name: 'description',
          content: 'The versatility, robustness and magnificence make marble the most desired material for various environments, from the most classic to the avant-garde. B Innovation promises to create the ideal solution for you, tailored to your needs.'
        },
        {
          property: 'og:description',
          content: 'The versatility, robustness and magnificence make marble the most desired material for various environments, from the most classic to the avant-garde. B Innovation promises to create the ideal solution for you, tailored to your needs.'
        }
      ]
    }

  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue'),
    meta: {
      title: 'News List',
      metaTags: [
        {
          name: 'description',
          content: 'News List Page'
        },
        {
          property: 'og:description',
          content: 'News List Page'
        }
      ]
    }
  },
  {
    path: '/news/:id-:title',
    name: 'newsdetail',
    component: () => import('../views/NewsDetail.vue'),
    props: (route) => ({ query: route.query.news }),
    meta: {
      title: 'News Detail Page',
      metaTags: [
        {
          name: 'description',
          content: 'News Detail Page'
        },
        {
          property: 'og:description',
          content: 'News Detail Page'
        }
      ]
    }
  },
 /*  {
    path: '/faqs',
    name: 'faqs',
    component: () => import(  webpackChunkName: "institutional-group"  '../views/Faqs.vue'),
    meta: {
      title: 'Frequent answered questions',
      metaTags: [
        {
          name: 'description',
          content: 'Frequent answered questions'
        },
        {
          property: 'og:description',
          content: 'Frequent answered questions'
        }
      ]
    }
  }, */
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import( /* webpackChunkName: "institutional-group" */ '../views/PrivacyPolicy.vue'),
    meta: {
      title: 'This is our Privacy Policy Page',
      metaTags: [
        {
          name: 'description',
          content: 'This is our Privacy Policy Page'
        },
        {
          property: 'og:description',
          content: 'This is our Privacy Policy Page'
        }
      ]
    }
  },
  {
    path: '/bloco-b',
    name: 'menu',
    component: () => import('../views/BlocoBCategories.vue'),
    meta: {
      title: 'This is our BlocoB Categories',
      metaTags: [
        {
          name: 'description',
          content: 'This is our BlocoB Categories'
        },
        {
          property: 'og:description',
          content: 'This is our BlocoB Categories'
        }
      ]
    }
  },
  {
    path: '/bloco-b/category/:category',
    name: 'listpage categories',
    component: () => import('../views/BlocoB.vue'),
    props: (route) => ({ query: route.query.category }),
    meta: {
      title: 'This is menu Categories',
      metaTags: [
        {
          name: 'description',
          content: 'This is menu Categories'
        },
        {
          property: 'og:description',
          content: 'This is menu Categories'
        }
      ]
    }
  },
  {
    path: '/bloco-b/category/:category/collection/:collection',
    name: 'listpage collection',
    component: () => import('../views/BlocoB.vue'),
    meta: {
      title: 'listpage category',
      metaTags: [
        {
          name: 'description',
          content: 'Products list page'
        },
        {
          property: 'og:description',
          content: 'Products list page'
        }
      ]
    }
  },
  /* {
    path: '/bloco-b/category/:category/collection/:collection/id/:id/name/:name',
    name: 'productDetail',
    component: () => import('../views/DetailPage.vue'),
    meta: {
      title: 'listpage',
      metaTags: [
        {
          name: 'description',
          content: 'Products list page'
        },
        {
          property: 'og:description',
          content: 'Products list page'
        }
      ]
    }
  }, */
/*   {
    path: '/bloco-b/category/:category/collection/:collection/id/:id/name/:name/variant/:variant',
    name: 'variantDetail',
    component: () => import('../views/ProductPage.vue'),
    meta: {
      title: 'listpage',
      metaTags: [
        {
          name: 'description',
          content: 'Products list page'
        },
        {
          property: 'og:description',
          content: 'Products list page'
        }
      ]
    }
  }, */
 /*  {
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
    component: () => import('../views/AccountRecovery.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/AccountRegister.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountInfo.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/ShoppingCart.vue'),
    meta: {
      title: 'Shopping Cart',
      metaTags: [
        {
          name: 'description',
          content: 'Our site is ... content'
        },
        {
          property: 'og:description',
          content: 'Our site is ... content'
        }
      ]
    }
  }, */
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router