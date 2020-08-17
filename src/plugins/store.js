import Vuex from 'vuex'
  
export const store = new Vuex.Store({
  state: {
    cart: [],
    token: null
  },
  mutations:
  {
    addToCart: (state, productId) => 
    {      
        let cartProduct = state.cart.find((product) => product == productId) // find the product in the cart list
        if (cartProduct) return // Already in the cart
        state.cart.push(productId)
    },
    removeFromCart: (state, productId) => 
    {
        let cartProductIndex = state.cart.findIndex((product) => product == productId); // find the product in the cart list
        if (cartProductIndex < 0) return // not in the cart
        state.cart.splice(cartProductIndex, 1)
    },
    login: (state, token) =>
    {
        state.token = token
    },
    logout: (state, token) =>
    {
        state.token = null
    }
  },
  actions: 
  {
    addToCart: ({ commit }, productId) => 
    {
        commit("addToCart", productId)  
    },
    removeFromCart: ({ commit }, productId) => 
    {
        commit("removeFromCart", productId)
    },
    checkItemInCart: ({ commit }, productId) => 
    {
        commit("removeFromCart", productId)
    },
    login: ({commit}, token) =>
    {
        commit("login", token)
    },
    logout: ({commit}, token) =>
    {
        commit("logout", token)
    }
  },
  getters: 
  {
    cartSize: (state) => 
    {
        return state.cart.length
    },
    isItemInCart: state => productId => {

        return state.cart.find((product) => product == productId) != null
    },
    isLoggedIn: (state) =>
    {
        return state.token
    }
  }
})