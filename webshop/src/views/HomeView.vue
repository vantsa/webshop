<template>
<div>
  <item-card :item="{
        title: 'Pringles Kürtöskalács',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
      <item-card :item="{
        title: 'Pringles Mézeskalács',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
      <item-card :item="{
        title: 'Pringles Töltöttkáposzta',
        kep: 'https://picsum.photos/200/220',
        price: '12.99 RON'
      }"></item-card>
      <item-details :item="{
        title: 'Pringles Kürtöskalács',
        kep: 'https://picsum.photos/500/600',
        price: '12.99 RON',
        available: true
      }"></item-details>
  <cart-final />
  <user-register />
  </div>
</template>

<script>
  import cartFinal from '../components/cart-final'
  import itemDetails from '../components/item-details'
  import itemCard from '../components/item-card'
  import userRegister from '../components/user-register'

  export default {
    name: 'HomeView',

    components: {
      cartFinal,
      itemDetails,
      itemCard,
      userRegister
    },
  }
</script>
