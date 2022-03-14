<template>
  <div>
    <div class="my_container max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-3">New Post</h1>
      <CreatePost />
    </div>
  </div>
</template>

<script>
  import CreatePost from "../../../components/NewPost/CreatePost.vue"
  export default {
    name: 'newPost',
    components:{
      CreatePost
    }
  }
</script>
<style scoped>
</style>