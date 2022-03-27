<template>
  <div>
    <nav class="bg-black mt-0 w-full">
      <NavSide
        @close="show = !show"
        :show="show"
      />
      <div class="nav-bar container mx-auto flex items-center">
        <div class="flex w-1/2 pl-4 text-sm">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-2">
              <nuxt-link class="text-white uppercase inline-block py-2 px-2 no-underline hover:text-gray" to="/">Home</nuxt-link>
            </li>
            <li class="mr-2">
              <nuxt-link class="text-white uppercase inline-block no-underline hover:text-gray py-2 px-2" to="/posts">Posts</nuxt-link>
            </li>
            <li class="mr-2">
              <nuxt-link class="text-white uppercase inline-block no-underline hover:text-gray py-2 px-2" to="/about">About</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex w-1/2 items-center justify-end content-center">
              <nuxt-link v-if="this.$store.getters.getToken != null" class="text-white uppercase inline-block no-underline hover:text-gray py-2 px-2" to="/admin/auth/logout">Logout</nuxt-link>
              <nuxt-link v-if="this.$store.getters.getToken == null" class="text-white uppercase inline-block no-underline hover:text-gray py-2 px-2" to="/admin/auth">Login</nuxt-link>
          <a class="inline-block no-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" target="_blank" href="https://github.com/Alessio2299">
            <img class="icon" src="~/static/GitHub_logo.png" alt="GitHub Alessio2299">
          </a>
        </div>
      </div>
      <div class="menu-hamburgher container mx-auto flex ml-4 items-center">
        <i @click="show = !show" class="close m-2 text-white text-3xl fas fa-bars"></i>
      </div>
      <div class="my_bg w-full h-96 bg-cover bg-center m-0 p-0">
      </div>    
		</nav>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBlog',
    data(){
      return{
        show: false
      }
    }
  }
</script>

<style scoped>
  .icon{
    width: 20px;
  }
  .my_bg{
    background-image: url("~/static/bg_image.jpeg");
  }
  .nav-bar{
    display: none;
  }
  .close{
    cursor: pointer;
  }
  @media screen and (min-width: 800px){
    .nav-bar{
      display: flex;
    }
    .menu-hamburgher{
      display: none;
    }
  }
</style>
