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
              <v-btn @click="adatokKitolt=!adatokKitolt"
              elevation="2"
              rounded
              color="red"
              x-large
              >Megrendel</v-btn>
          </div>
        <v-dialog v-model="adatokKitolt"
         transition="dialog-bottom-transition"
          max-width="40%">
          <user-address />
        </v-dialog>
    </div>
    
</template>

<script>
import cartItem from "../components/cart-item";
import userAddress from "../components/user-address";

export default {
  name: "check_cart",
  components: {
    cartItem,
    userAddress,
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
      totalsum: 19.99,
      adatokKitolt: false
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
  justify-content: flex-start;
}
.items{
  margin-right: 3rem;
  border-radius: 1em;
  border: 1px solid grey;
  border-bottom: none;
  min-width: 70%;
}
h1{
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>