<template>
  <div class="cartdetails">
       <div class="bal">
         <img style="max-height: 200px;" :src="getBaseUrlForPics(item.item.kep_url)">
         <h2> {{item.item.name}}<br> {{item.item.ar}} RON/db</h2>
       </div>
      <div class="jobb">
        <h3> {{item.ar}}</h3>
        <div class="prod-qnt">
          <v-btn class="qnt" @click="decrement"><v-icon>mdi-chevron-down</v-icon></v-btn>
          <p class="input"> {{item.quantity}} </p>
          <v-btn class="qnt" @click="increment"><v-icon>mdi-chevron-up</v-icon></v-btn>
        </div>
        <v-btn @click="deleteItemFromCart(item)" class="delete">Delete<v-icon>mdi-delete</v-icon></v-btn>
      </div>

  </div>
</template>

<script>
export default {
  name: "check_cart",
  props: {
    item: {
      type: Object,
      required : true
    }
  },
  data () {
    return {
      quantity: 1,
    }
  },
  methods: {
    increment() {
      this.quantity++
      console.log(this.quantity)
    },
    decrement() {
      if (this.quantity === 1) {
        alert('Negativ mennyiség nem megfelelő')
      } else {
        this.quantity--
      }
    },
    getBaseUrlForPics(picName) {
      let result =`http://localhost/webprogProjektApi/images/${picName}`;
      return result
    },
    deleteItemFromCart(item) {
      this.$store.dispatch('removeItemFromCart',item)
      this.$emit('itemRemoved',item)
    }
  }
}
</script>

<style scoped>

.cartdetails{
  border-top: 1px solid grey;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}
h3 .armutat{
  display: flex;

}
.bal h2{
  display: flex;
  padding: 1.5rem;
  font-size: 1.5rem;
}
.jobb{
  float: right;
  padding: 1.5rem;
}
img{
  float: left;
  padding: 1.5rem;
}
h3{
  margin-bottom: 0.5rem;
  margin-left: 1.2rem;
  font-size: 1.5rem;

}
.prod-qnt {
  display: flex;

}
.delete{
  margin-left: 1.2rem;
}
p{
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  width: 2.5rem;
  text-align: center;
  padding: .35rem .5rem;
}

.qnt{
  border: 2px solid #ddd;
  background: #f5f5f5;
  color: #888;
  font-size: 0.2rem;
  cursor: pointer;
}
</style>