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
      newCartItems.forEach(i=>{
        if(!state.cartItems.some(item=>item.item.id === i.item.id)) {
          state.cartItems.push(i)
        }
        else {
          state.cartItems.find(item=>item.item.id === i.item.id).quantity += i.quantity
        }
      })
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
