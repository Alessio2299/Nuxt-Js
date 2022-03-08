<template>
  <div>
    <HeaderBlog />
    <div class="max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl pb-5">Home</h1>
      <PostList 
        type="principal"
      />
    </div>
  </div>
</template>

<script>
  import HeaderBlog from "~/components/HeaderBlog.vue"
  import PostList from "~/components/PostList.vue"

  export default {
    name: 'IndexPage',
    data(){
      return{
      }
    },
    components:{
      HeaderBlog,
      PostList
    }
  }
</script>
<style>
  html{
    font-family: 'Roboto';
  }
</style>