<template>
<div class="main">
  <item-card :item="{
        title: 'Pringles Kürtöskalács',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
      <item-card 
      :item="{
        title: 'Pringles Mézeskalács',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
      <item-card :item="{
        title: 'Pringles Töltöttkáposzta',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
  <cart-final />
  </div>
</template>

<script>
  import cartFinal from '../components/cart-final'
  import itemCard from '../components/item-card'


  export default {
    name: 'HomeView',

    components: {
      cartFinal,
      itemCard,
    },
    data: () => ({
    
  }),
  }
</script>

<style scoped>
.main{
  width: 70%;
  margin: 0 auto;
}
</style>