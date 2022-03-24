<template>
  <div>
    <div class="my_container max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-3">Admin</h1>
      <div class="text-center">
        <button @click="newPage" class="mt-20 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Create New Post
        </button>
      </div>
      <h2 class="ml-5 uppercase font-semibold text-2xl">My Posts</h2>
      <PostList 
        type="all"
        admin
      />
    </div>
  </div>
</template>

<script>
  import PostList from "../../components/PostList.vue"
  export default {
    name: 'Admin',
    components:{
      PostList 
    },
    methods:{
      newPage(){
        this.$router.push('/admin/post/newPost');
      }
    },
    middleware: 'authMiddleware'
  }
</script>
<style scoped>
</style>