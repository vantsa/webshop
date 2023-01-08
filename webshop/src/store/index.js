import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
  },
  mutations: {
    addToCartItems(state, newCartItems) {
      newCartItems.forEach(i=>state.cartItems.push(i))
      let cartItemsStringified = JSON.stringify(state.cartItems)
      localStorage.setItem('cartItems', cartItemsStringified)
    },
    removeItemFromCart(state, item) {
      state.cartItems = state.cartItems.filter(i=>i.item.id !== item.item.id)
      let cartItemsStringified = JSON.stringify(state.cartItems)
      localStorage.setItem('cartItems', cartItemsStringified)
    },
    setCartItemsFromLocalStorage(state, items) {
      state.cartItems = items
    }
  },
  actions: {
    addToCartItems({commit}, newCartItems) {
      commit('addToCartItems', newCartItems)
    },
    removeItemFromCart({commit}, item) {
      commit('removeItemFromCart', item)
    },
    setCartItemsFromLocalStorage({commit}, items) {
      commit('setCartItemsFromLocalStorage',items)
    }
  },
  modules: {
  }
})
