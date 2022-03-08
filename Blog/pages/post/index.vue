<template>
  <div>
    <HeaderBlog />
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl">Posts</h1>
      <PostList 
        type="all"
      />
    </div>
  </div>
</template>

<script>
  import PostList from "~/components/PostList.vue"
  import HeaderBlog from "~/components/HeaderBlog.vue"

  export default {
    name: 'Post',
    data(){
      return{
        start: "",
        last: "",
      }
    },
    components:{
      PostList,
      HeaderBlog
    }
  }
</script>
