<template>
  <div class="w-full max-w-xs m-auto -mt-12 pb-10">
    <h2 class="text-white uppercase text-5xl pb-10">{{isLogin ? "Login" : "Sign in"}}</h2>
    <p class="text-red-700 text-center" v-if="error != '' && (($store.state.idToken == null) || ($store.state.idToken == 'undefined'))">{{error}}</p>
    <form @keyup.enter="send()" class="relative bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-if="!isLogin" class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="user.name" id="username" type="text" placeholder="Name">
      </div>
      <div v-if="!isLogin" class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Lastname
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="user.lastname" id="username" type="text" placeholder="Lastaname">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="user.email" id="username" type="text" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="user.password" id="password" type="password" placeholder="********">
      </div>
      <div class="flex items-center justify-between">
        <button @click="send()" class="login bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          {{isLogin ? "Login" : "Sign in"}}
        </button>
       <div class="text-right">
          <a v-if="isLogin" class="inline-block align-baseline font-bold text-sm text-black hover:text-gray-700" href="#">
            Forgot Password?
          </a>
          <a @click="isLogin = !isLogin" class="inline-block align-baseline font-bold text-sm text-black hover:text-gray-700" href="#">
             {{isLogin ? "Create new account" : "Login"}}
          </a>
       </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Auth',
    data(){
      return{
        error: "",
        isLogin: true,
        user:{
          email: "",
          password : ""
        }
      }
    },
    components:{
    },
    methods:{
      send(){
        let urlAuth = process.env.urlAuth;
        let body = {};
        if (this.isLogin){
          console.log(urlAuth);
          urlAuth = urlAuth + "accounts:signInWithPassword?key=" + process.env.apiKey;
          body = {
            email : this.user.email,
            password : this.user.password,
            returnSecureToken : true
          }
        } else{
          console.log(urlAuth);
          urlAuth = urlAuth + "accounts:signUp?key=" + process.env.apiKey;
          body = {
            name : this.user.name,
            lastname : this.user.lastname,
            email : this.user.email,
            password : this.user.password,
            returnSecureToken : true
          }
        }
        axios.post(urlAuth, body)
        .then(resp => {
          const token = resp.data.idToken;
          const expiresIn = resp.data.expiresIn;
          const tokenExpireIn = new Date().getTime() + Number.parseInt(expiresIn) * 1000;
          this.$store.commit('setToken',resp.data.idToken);
          
          // Save Token and tokenExpireIn for Client Side
          localStorage.setItem('token', token);
          localStorage.setItem('tokenExpireIn', tokenExpireIn);

          // Save Token and tokenExpireIn for Server Side
          this.$cookies.set('token', token);
          this.$cookies.set('tokenExpireIn', tokenExpireIn);

          this.$router.push('/admin');
        })
        .catch(error => { 
          this.error = error.response.data.error.message.replaceAll("_"," ");
          console.log(this.$store.idToken);
          console.log(this.error);
        })        
      }
    }
  }
</script>

<style scoped>
  form::after{
    content: "";
    height: 60px;
    transform: rotateZ(40deg);
    width: 15px;
    background-color: black;
    position: absolute;
    bottom: 85%;
    left: 5px;
  }
  form::before{
    content: "";
    height: 60px;
    transform: rotateZ(-40deg);
    width: 15px;
    background-color: black;
    position: absolute;
    bottom: 85%;
    right: 5px;
  }
  .login{
    width: 60%;
  }
</style>