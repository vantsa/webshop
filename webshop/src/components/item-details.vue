<template>
  <div class="details">
  <h1 class="pa-10">{{item.title}}</h1>
    <div class="detailscontainer">
      <div class="productphoto">
        <img :src='item.kep'>
      </div>
    <div class="prod-details">
      <h2>{{item.price}}</h2>
        <div v-if="item.available === true">
          <v-icon style="color:green">mdi-brightness-1</v-icon>
          <p style="color:green">Elérhető</p>
        </div>
        <div v-else>
          <v-icon style="color:red">mdi-brightness-1</v-icon>
          <p style="color:red">Elfogyott</p>
        </div>
          <v-btn class="mb-3">Kosarhoz adas</v-btn>
        <div class="prod-qnt">
          <v-btn class="qnt" @click="decrement"><v-icon>mdi-chevron-down</v-icon></v-btn>
          <p class="input"> {{quantity}} </p>
          <v-btn class="qnt" @click="increment"><v-icon>mdi-chevron-up</v-icon></v-btn>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-details",
  props: {
    item: {
      type: Object,
      required : true
    }
  },
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    increment() {
      console.log("szia");
      this.quantity++
      console.log(this.quantity)
    },
    decrement() {
      if (this.quantity === 1) {
        alert('Negativ mennyiség nem megfelelő')
      } else {
        this.quantity--
      }
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 44px;
}
h2{
  font-size: 38px;
}
p{
  font-size: 24px;
  display: inline-block;
}
.details{
  width: 80%;
  margin:0 auto;
}
.detailscontainer{
  margin: 0 auto;
  display: flex;
  justify-content: start;
  flex-direction: row;
}
.productphoto{
  width: 40%;
}
.prod-details > * {
  margin-top: 2rem;
  margin-left: 2rem;
}
.prod-qnt {
  display: flex;
}
p .input {
  border: 0;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  width: 2.5rem;
  text-align: center;
  padding: 0 .5rem;
}

.qnt{
  border: 2px solid #ddd;
  padding: .5rem;
  background: #f5f5f5;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
}
</style>