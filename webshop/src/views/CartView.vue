<template>
  <div class="main">
    <cart-final></cart-final>
  </div>
</template>

<script>
import cartFinal from "@/components/cart-final";
export default {
  name: "CartView",
  components: {cartFinal,},
  mounted() {
    console.log('cart items set')
    this.$store.dispatch('setCartItemsFromLocalStorage',JSON.parse(localStorage.getItem("cartItems")))
  }
}
</script>

<style scoped>
.main{
  margin: 0 auto;
  width: 80%;
}
</style>