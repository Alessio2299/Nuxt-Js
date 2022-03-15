<template>
  <div class="pt-12 pb-12 text-center w-2/5 m-auto">
    <h2 class="text-2xl uppercase">New Post</h2>
    <PostForm :post="newPost"/>
  </div>
</template>

<script>
  import PostForm from "~/components/NewPost/CreatePost.vue"
  export default {
    name: 'NewPost',
    data(){
      return{
        newPost:{
          title: "",
          image: "",
          description: "",
          timeToRead: ""
        }
      }
    },
    components:{
      PostForm
    },
    methods:{
    }
  }
</script>
<style scoped>

</style>