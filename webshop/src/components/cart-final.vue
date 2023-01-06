<template>
    <div class="cartres">
          <div class="items">
            <cart-item :item="{
      title: 'Pringles',
      kep: 'https://picsum.photos/250/150',
      price: '12.99 RON',
      }"></cart-item>
            <cart-item :item="{
      title: 'Pringles',
      kep: 'https://picsum.photos/250/150',
      price: '12.99 RON',
      }"></cart-item>
          </div>
          <div class="receipt">
              <h1>Számla</h1>
              <h2>Összesen fizetendő:   Papito</h2>
              <h2>Szállitás: 19,99 Lei</h2>
              <h1>Összesen: Ingyen van vigyetek</h1>
          </div>
    </div>
</template>

<script>
import cartItem from "../components/cart-item";

export default {
  name: "check_cart",
  components: {
    cartItem,
  },
  props: {
    item: {
      type: Object,
      required : true
    }
  },
  data () {
    return {
      total: 0,
      totalsum: 19.99
    }
  },
  methods: {
    getCartValue() {
        
    }
  }
}
</script>

<style>
.cartres{
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}
.items{
  width: 70%;
  margin-right: 2.5rem;
  border-radius: 10px;
  border: 1px solid grey;
}
</style>