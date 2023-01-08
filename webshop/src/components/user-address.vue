<template>
<v-card>
  <v-form
  v-model="valid">
    <v-container>
      <v-row   align="center"
      justify="center" >
        <v-col
          cols="auto"
          md="5"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Név"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
      align="center"
      justify="center">
        <v-col
          cols="auto"
          md="5"
          
        >
          <v-text-field
            v-model="address"
            :rules="addrRules"
            label="Cim"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
      align="center"
      justify="center">
        <v-col
          cols="auto"
          md="5"   
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
      align="center"
      justify="center">
        <v-col
          cols="auto"
          md="5" 
        >
          <v-text-field
            v-model="phoneNumber"
            :rules="phoneRules"
            label="Telefonszám pl.0754782121"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
      align="center"
      justify="center">
          <v-btn
          x-large
          color="red"
          rounded
          elevation="2"
          class="mb-5"
          @click="preapareItemsForOrder"
          >
            Fizetés
          </v-btn>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'user-address',
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Kötelező kitölteni',
        v => v.length >= 5 || 'A név hossza legalább 5 karakter!',
      ],
      address: '',
      addrRules: [
        v => !!v || "Kötelező kitölteni",
        v => v.length >= 10 || 'A cim hossza legalább 10 karakter!',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail kötelező',
        v => /.+@.+/.test(v) || 'Érvénytelen formula',
      ],
      phoneNumber: '',
      phoneRules: [
        v => !!v || 'Kötelező kitölteni',
        v => v.length == 10 || 'A tel.szám 10 számból kell álljon!',
        v => /^\d+$/.test(v) || "Csak számokat tartalmazhat"
      ],
    }),
    methods: {
      async preapareItemsForOrder() {
        let orders = JSON.parse(localStorage.getItem('cartItems'))
        console.log(orders)
        let preaparedOrders = []
        orders.forEach(order=>{
          preaparedOrders.push({
            itemId: order.item.id,
            quantity: order.quantity
          })
        })
        var prepareShipping ={
          name: this.name,
          address: this.address, 
          email: this.email,
          phoneNumber: this.phoneNumber,
          items: [preaparedOrders]
        }
        console.log(prepareShipping)
        await axios.post('http://localhost/webprogProjektApi/rendeles', prepareShipping)
      }
    }
  }
</script>

<style scoped>
.form{
  text-align: center;
}
</style>