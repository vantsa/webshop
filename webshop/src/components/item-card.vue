<template>
  <div class="card">
    <v-card
    width="250"
    height="400"
    dark
    class="ma-4 pa-3"
    rounded-xl
    >
       <img 
       :src="getBaseUrlForPics(item.kep_url)">
       <p>{{item.name}}</p>
      <div class="cardfooter">
       <h2>{{item.ar}} RON</h2>
       <v-btn @click = getItemID(item)
       ><v-icon>mdi-cart</v-icon></v-btn>
      </div>
    </v-card>
    <v-dialog
     fullscreen
     hide-overlay
     transition="dialog-bottom-transition"
     v-model="itemDialog">
        <item-details @close="itemDialog=false" :id="currentViewedItem"></item-details>
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
      currentViewedItem: 0
    }
  },
  methods: {
    addToCart() {
          this.cart.push(this.item);
    },
    getBaseUrlForPics(picName) {
      let result =`http://localhost/webprogProjektApi/images/${picName}`;
      return result
    },
    getItemID(item){
          this.currentViewedItem = item.id;
          this.itemDialog = !this.itemDialog
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
  max-height: 200px;
  display:block;
  transition: transform .4s;
  margin: 0 auto;
}
img:hover{
  transform: scale(1.05);
}
p{
  margin: 0.8em;
}
.cardfooter{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>