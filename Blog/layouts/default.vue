<template>
  <div>
    <HeaderBlog />
    <Nuxt />
  </div>
</template>

<script>
  import HeaderBlog from "~/components/Nav/HeaderBlog.vue"

  export default {
    name: 'About',
    components:{
      HeaderBlog
    }
  }
</script>
