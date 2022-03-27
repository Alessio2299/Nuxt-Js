<template>
  <div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-5">Posts</h1>
      <PostList 
        type="all"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data(){
      return{
        start: "",
        last: "",
      }
    }
  }
</script>
