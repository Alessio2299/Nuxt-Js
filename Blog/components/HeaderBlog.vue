<template>
  <div>
    <nav class="bg-black mt-0 w-full">
      <div class="container mx-auto flex items-center">
        <div class="flex w-1/2 pl-4 text-sm">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-2">
              <nuxt-link class="text-white inline-block py-2 px-2 no-underline hover:text-gray" to="/">HOME</nuxt-link>
            </li>
            <li class="mr-2">
              <nuxt-link class="text-white inline-block no-underline hover:text-gray py-2 px-2" to="/post">POSTS</nuxt-link>
            </li>
            <li class="mr-2">
              <nuxt-link class="text-white inline-block no-underline hover:text-gray py-2 px-2" to="/about">ABOUT</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex w-1/2 justify-end content-center">
          <a class="inline-block no-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" target="_blank" href="https://github.com/Alessio2299">
            <img class="icon" src="~/static/GitHub_logo.png" alt="GitHub Alessio2299">
          </a>
        </div>
      </div>
      <div class="my_bg w-full h-96 bg-cover bg-center m-0 p-0">
      </div>    
		</nav>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBlog',
  }
</script>

<style scoped>
  .icon{
    width: 20px;
  }
  .my_bg{
    background-image: url("~/static/bg_image.jpeg");
  }
</style>
