<template>
    <v-app>
     <div class="header-container">
      <div class="header">
        <div class="logo-div">
          <h1>eMag2</h1>
        </div>
        <!-- <div class="signin">
          <v-btn @click="registerDialog = !registerDialog"
              elevation="2"
              rounded
          >Sign In</v-btn>
          </div>
        <div class="login">
          <v-btn @click="loginDialog = !loginDialog"
              elevation="2"
              rounded
          >Log In</v-btn>
          </div> -->
         <div class="searchFieldContainer">
          <div style="max-width: 300px; position: relative; top: 12px;">
            <v-text-field
            height="30"
            placeholder="Keresés.."
            solo
            dense
            rounded
            background-color="white"
            ></v-text-field>
          </div>
          <v-icon @click="$router.push('/cart')" class="menu-button" color="white" x-large>mdi-cart</v-icon>
        </div>
      </div>
      
    </div>
    <div class="menubar">
            <ul>
              <li style="cursor: pointer" @click="$router.push('/')">Minden</li>
              <li style="cursor: pointer" @click="$router.push('/csokoladek')">Csokoládék</li>
              <li style="cursor: pointer" @click="$router.push('/uditoitalok')">Udito</li>
              <li style="cursor: pointer" @click="$router.push('/ropogtatnivalok')">Chipsek</li>
            </ul>
      </div>
      <v-main>
      <router-view/>
    </v-main>
    <v-footer 
      app
      dark
    >
      <span class="footer">&copy; {{ new Date().getFullYear() }} Fnacy design studio, eh?</span>
    </v-footer>
  <v-dialog v-model= "registerDialog"
    max-width="40%">
    <user-register />
  </v-dialog>
  <v-dialog v-model= "loginDialog"
    max-width="40%">
    <user-login />
  </v-dialog>
  </v-app>
  
    

    
</template>

<script>
import userRegister from "./components/user-register.vue"
import userLogin from "./components/user-login.vue"


export default
{
components: { userRegister, userLogin },
  name: 'App',

  data: () => ({
    registerDialog: false,
    loginDialog: false,
  }),
}
  
</script>


<style scoped>
.footer{
  margin: 0 auto;
}
h1{
  color:white;
}
.menubar{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  border-top: 1px solid black;
}
ul li{
  display: inline;
  padding: 2em;
  font-size: 1.5em;
  color: white;
}
.header {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.signin {
  margin-right: 2em;
  display: block;
}
.searchFieldContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-div {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%,-50%);
}

.header-container {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
}

.menu-button {
  cursor: pointer;
}
</style>