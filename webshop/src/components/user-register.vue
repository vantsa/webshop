<template>
<v-card>
  <v-form
  v-model="valid">
  <h1>Regisztráció</h1>
    <v-container>
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
            v-model="password"
            :rules="passwordRules"
            label="Jelszó"
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
            v-model="passwordcnfrm"
            :rules="passwordcnfrmRules"
            label="Jelszó megerősitése"
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
          class="mb-5">Regisztráció</v-btn>
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
      email: '',
      emailRules: [
        v => !!v || 'E-mail kötelező',
        v => /.+@.+/.test(v) || 'Érvénytelen formula',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Kötelező jelszó',
        v => v.length > 5 || "Legalább 6 karakterből kell állnia"
      ],
      passwordcnfrm: '',
      passwordcnfrmRules: [
            v => v.password=v || "Megkell egyeznie a két jelszónak"
      ]
    }),
  }
</script>

<style scoped>
.form{
  text-align: center;
}
h1{
  padding-top: 1em;
  text-align: center;
}
</style>