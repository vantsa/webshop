<template>
    <div class="cartres">
      <div class="d-flex justify-center flex-column">
        <cart-item @itemRemoved="removeItems" v-for="item in cartItems" :key="item.item.id" :item="item"></cart-item>
      </div>
          <div class="receipt">
              <h1>Számla</h1>
              <h2>Kosár: {{ getCartValue() }} RON</h2>
              <h2>Szállitás: 19,99 RON</h2>
              <h1>Összesen: {{Math.round((getCartValue() + 19.99)*100)/100}} RON</h1>
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
      adatokKitolt: false,
      cartItems: []
    }
  },
  mounted() {
    this.cartItems = this.getSavedCartItems
  },
  methods: {
    getCartValue() {
      let sum = 0;
      this.cartItems.forEach(i=>{
        sum += Number.parseFloat(i.item.ar) * Number.parseFloat(i.quantity)
      })
      return sum;
    },
    removeItems(item) {
      this.cartItems = this.cartItems.filter(i=>i.item.id !== item.item.id)
    }
  },
  computed: {
    getSavedCartItems() {
      return JSON.parse(localStorage.getItem('cartItems'))
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
.receipt{
  margin-left: 10em;
}
</style>