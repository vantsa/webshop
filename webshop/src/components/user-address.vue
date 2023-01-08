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
           href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Fizetés</v-btn>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script>
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
  }
</script>

<style scoped>
.form{
  text-align: center;
}
</style>