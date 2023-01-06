<template>
  <div class="card">
    <v-card
    width="250"
    height="400"
    dark
    class="ma-4 pa-4"
    rounded-xl
    >
       <img :src='item.kep'>
       <p>{{item.title}}</p>
      <div class="cardfooter">
       <h2>{{item.price}}</h2>
       <v-btn @click="addToCart"><v-icon>mdi-cart</v-icon></v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "item-card",
  props: {
    item: {
      type: Object,
      required : true
    }
  },
  data(){
    return{
      cart: []
    }
  },
  methods: {
    addToCart() {
          this.cart.push(this.item);
          //console.log(cart.length);
    }
  }
}
</script>

<style scoped>
.card{
  margin: 0 auto;
  display: inline-block;
}
img{
  width: 100%;
  transition: transform .4s;
}
img:hover{
  transform: scale(1.05);
}
.rating{
  margin-bottom: 5%;
  margin-top: 5%;
}
.cardfooter{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>