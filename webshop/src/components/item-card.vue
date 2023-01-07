<template>
  <div class="card">
    <v-card
    width="250"
    height="400"
    dark
    class="ma-4 pa-4"
    rounded-xl
    >
       <img 
       :src="getBaseUrlForPics(item.kep_url)">
       <p>{{item.name}}</p>
      <div class="cardfooter">
       <h2>{{item.ar}}</h2>
       <v-btn @click = "itemDialog = !itemDialog"
       ><v-icon>mdi-cart</v-icon></v-btn>
      </div>
    </v-card>
    <v-dialog v-model="itemDialog">
        <item-details :item="{
              title: 'Pringles Kürtöskalács',
              kep: 'https://picsum.photos/500/600',
              price: '12.99 RON',
              available: true
            }"></item-details>
    </v-dialog>
  </div>
</template>

<script>
  import itemDetails from '../components/item-details'

export default {
  components: { itemDetails},
  name: "item-card",
  props: {
    item: {
      type: Object,
      required : true
    }
  },
  data(){
    return{
      cart: [],
      itemDialog: false,
    }
  },
  methods: {
    addToCart() {
          this.cart.push(this.item);
    },
    getBaseUrlForPics(picName) {
      let result =`http://localhost/webprogProjektApi/images/${picName}`;
      return result
    }
  },
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
.cardfooter{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>