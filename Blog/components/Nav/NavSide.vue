<template>
  <aside v-if="show" class="bg-white w-1/3 mt-0">
    <div class="nav-side">
      <div class="btn_close text-right">
        <i @click="$emit('close')" class="btn fas fa-times-circle"></i>
      </div>
      <ul class="text-2xl text-center mt-5">
        <li class="mr-2">
          <nuxt-link class="text-black inline-block py-2 px-2 no-underline hover:text-gray" to="/">HOME</nuxt-link>
        </li>
        <li class="mr-2">
          <nuxt-link class="text-black inline-block no-underline hover:text-gray py-2 px-2" to="/post">POSTS</nuxt-link>
        </li>
        <li class="mr-2">
          <nuxt-link class="text-black inline-block no-underline hover:text-gray py-2 px-2" to="/about">ABOUT</nuxt-link>
        </li>
      </ul>
      <div class="w-1/2 mx-auto text-center">
        <a class="inline-block no-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" target="_blank" href="https://github.com/Alessio2299">
          <img class="icon" src="~/static/GitHub_logo.png" alt="GitHub Alessio2299">
        </a>
      </div>
    </div> 
  </aside>
</template>

<script>
  export default {
    name: 'NavSide',
    data(){
      return{
        asideShow: false
      }
    },
    props:{
      show: Boolean
    }
  }
</script>

<style scoped>
  aside{
    height: 100vh;
    position: fixed;
    box-shadow: 5px 5px 10px #000;
  }
  .icon{
    filter: invert(1);
    width: 30px;
  }
  .btn{
    font-size: 30px;
    margin: 5% 5% 0 0;
    cursor: pointer;
  }
</style>
