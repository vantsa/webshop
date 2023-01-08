<template>
<v-card>
  <v-toolbar
      dark
      color="primary"
  >
    <v-btn
        icon
        dark
        @click="$emit('close')"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-toolbar-title>{{ item.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-row align="center" justify="center">
  <div class="details">
  <h1 class="pa-10">{{item.name}}</h1>
    <div class="detailscontainer">
      <div class="productphoto">
        <img :src="getBaseUrlForPics(item.kep_url)">
      </div>
    <div class="prod-details">
      <h2>{{item.ar}} RON</h2>
        <div v-if="item.darab_szam > 0">
          <p style="color:green">Elérhető</p>
        </div>
        <div v-else>
          <p style="color:red">Elfogyott</p>
        </div>
          <v-btn @click="addItemToCart" class="mb-3">Kosarhoz adas</v-btn>
        <div class="prod-qnt">
          <v-btn class="qnt" @click="decrement"><v-icon>mdi-chevron-down</v-icon></v-btn>
          <p class="input"> {{quantity}} </p>
          <v-btn class="qnt" @click="increment"><v-icon>mdi-chevron-up</v-icon></v-btn>
        </div>
    </div>
    </div>
  </div>
  </v-row>
</v-card>
</template>

<script>
  import axios from 'axios'

export default {
  name: "item-details",
  props: {
    id: {
      required : true
    }
  },
  data () {
    return {
      quantity: 1,
      item: null
    }
  },
  methods: {
    increment() {
      this.quantity++
    },
    decrement() {
     if(this.quantity > 1) {
       this.quantity--
     }
    },
    getBaseUrlForPics(picName) {
      let result =`http://localhost/webprogProjektApi/images/${picName}`;
      return result
    },
    addItemToCart() {
      let newCartItems = []
      newCartItems.push({item: this.item, quantity: this.quantity})
      this.$store.dispatch('addToCartItems', newCartItems)
    }
  },
    async mounted() {
    this.item = (await axios.get(`http://localhost/webprogProjektApi/termekek/${this.id}`)).data
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
  font-size: 1.5em;
  font-weight: bold;

}
.details{
  margin-left: 2em;
}
.detailscontainer{
  margin: 0 auto;
  display: flex;
  justify-content: start;
  flex-direction: row;
}

.prod-details > * {
  margin-top: 2rem;
  margin-left: 5rem;
}
.prod-qnt {
  display: flex;
}
.input{
    border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
}
img{
  max-height: 400px;  
}
.qnt{
  border: 2px solid #ddd;
  background: #f5f5f5;
  color: #888;
  font-size: 0.2rem;
  cursor: pointer;
}
</style>