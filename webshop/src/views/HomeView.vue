<template>
<div class="main">

  <item-card
    v-for="item in products"
    :key="item.id"
    :item="item"
  ></item-card>
  </div>
</template>

<script>
  import itemCard from '../components/item-card'
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios'


  export default {
    name: 'HomeView',
    components: {
      itemCard,
    },
    data: () => ({
      products: [],
  }),

  async mounted() {
    this.products = (await axios.get('http://localhost/webprogProjektApi/termekek')).data
    console.log(this.products)
  }

  }
</script>

<style scoped>
.main{
  width: 70%;
  margin: 0 auto;
}
</style>