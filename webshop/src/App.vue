<template>
    <v-app>
     <div class="header-container">
      <div class="header">
        <div class="logo-div">
          <div style="background: #fefefe; border-radius: 50%; width: 50px; height: 50px"></div>
        </div>
        <div class="signin">
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
          </div>
        <!-- <div class="searchFieldContainer">
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
          <v-icon class="menu-button" color="white" x-large>mdi-cart</v-icon>
        </div> -->
      </div>
      
    </div>
    <div class="menubar">
            <ul>
              <li>Csokoládék</li>
              <li>Üditők</li>
              <li>Chipsek</li>
            </ul>
      </div>
      <v-main>
      <router-view/>
    </v-main>
    <v-footer 
      :absolute="!fixed"
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
.menubar{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #696969;
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
  background: #696969;
}

.menu-button {
  cursor: pointer;
}
</style>