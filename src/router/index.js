import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

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
          name: 'og:title',
          content: 'B Stone - Bloco Explore Project Innovation'
        },
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
    component: () => import( /* webpackChunkName: "pages" */ '@/views/BExplore.vue'),
    meta: {
      title: 'B Explore Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'B Explore Page'
        },
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
    component: () => import( /* webpackChunkName: "pages" */ '@/views/BProject.vue'),
    meta: {
      title: 'B Project Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'B Project Page'
        },
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
    component: () => import( /* webpackChunkName: "pages" */ '@/views/BInnovation.vue'),
    meta: {
      title: 'B Innovation Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'B Innovation Page'
        },
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
    component: () => import('@/views/News.vue'),
    meta: {
      title: 'News List Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'News List Page'
        },
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
    path: '/news/:id',
    name: 'newsdetail',
    component: () => import('@/views/NewsDetail.vue'),
    props: (route) => ({ query: route.query.news }),
    meta: {
      title: 'News Detail Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'News Detail Page'
        },
        {
          name: 'description',
          content: 'News Detail Page'
        },
        {
          property: 'og:description',
          content: 'News Detail Page'
        }
      ]
    },
    children: [
      {
        path: '-:title'
      }
    ]
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import( /* webpackChunkName: "institutional-group" */  '../views/Faqs.vue'),
    meta: {
      title: 'Frequent answered questions',
      metaTags: [
        {
          name: 'og:title',
          content: 'Frequent answered questions'
        },
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
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import( /* webpackChunkName: "institutional-group" */ '../views/PrivacyPolicy.vue'),
    meta: {
      title: 'This is our Privacy Policy Page',
      metaTags: [
        {
          name: 'og:title',
          content: 'This is our Privacy Policy Page'
        },
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
      title: 'BlocoB Menu Categories',
      metaTags: [
        {
          name: 'og:title',
          content: 'BlocoB Menu Categories'
        },
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
    name: 'listpage-categories',
    component: () => import('../views/BlocoB.vue'),
    props: (route) => ({ query: route.query.category }),
    meta: {
      title: 'BStone Listpage Categories',
      metaTags: [
        {
          name: 'og:title',
          content: 'BStone Listpage Categories'
        },
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
    name: 'listpage-collection',
    component: () => import('../views/BlocoB.vue'),
    props: (route) => ({ query: route.query.collection }),
    meta: {
      title: 'BStone Listpage Collection',
      metaTags: [
        {
          name: 'og:title',
          content: 'BStone Listpage Collection'
        },
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
  {
    path: '/bloco-b/category/:category/collection/:collection/id/:id',
    name: 'productDetail',
    component: () => import('../views/DetailPage.vue'),
    props: (route) => ({ query: route.query.id }),
    meta: {
      title: 'Product Detail',
      metaTags: [
        {
          name: 'og:title',
          content: 'Product Detail'
        },
        {
          name: 'description',
          content: 'Products list page'
        },
        {
          property: 'og:description',
          content: 'Products list page'
        }
      ]
    },
    children: [
      {
        path: 'name/:name'
      }
    ]
  },
  {
    path: '/bloco-b/category/:category/id/:id',
    name: 'productDetail2',
    component: () => import('../views/DetailPage.vue'),
    props: (route) => ({ query: route.query.id }),
    meta: {
      title: 'Product Detail',
      metaTags: [
        {
          name: 'og:title',
          content: 'Product Detail'
        },
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
  {
    path: '/bloco-b/category/:category/collection/:collection/id/:id/variant/:variant',
    name: 'variantDetail2',
    component: () => import('../views/ProductPage.vue'),
    props: (route) => ({ query: route.query.variant }),
    meta: {
      title: 'Variant Detail',
      metaTags: [
        {
          name: 'og:title',
          content: 'Variant Detail'
        },
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
  {
    path: '/bloco-b/category/:category/collection/:collection/id/:id/name/:name/variant/:variant',
    name: 'variantDetail',
    component: () => import('../views/ProductPage.vue'),
    props: (route) => ({ query: route.query.variant }),
    meta: {
      title: 'Variant Detail',
      metaTags: [
        {
          name: 'og:title',
          content: 'Variant Detail'
        },
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
  {
    path: '/search',
    name: 'search',
    component: () => import('../components/subcomponents/ModalSearch.vue'),
  },
  {
    path: '/search/:term',
    name: 'searchterm',
    component: () => import('../components/subcomponents/ModalSearch.vue'),
    props: (route) => ({ query: route.query.term })
  },
  /* {
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
          name: 'og:title',
          content: 'Shopping Cart'
        },
        {
          name: 'description',
          content: 'Shopping Cart'
        },
        {
          property: 'og:description',
          content: 'Shopping Cart'
        }
      ]
    }
  }, */
  {
    path: '/404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404 - Error Page Not Found',
      metaTags: [
        {
          name: 'og:title',
          content: '404 - Error Page Not Found'
        },
        {
          name: 'description',
          content: '404 - Error Page Not Found'
        },
        {
          property: 'og:description',
          content: '404 - Error Page Not Found'
        }
      ]
    }
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