<template>
  <div class="pt-12 pb-12 text-center w-2/5 m-auto">
    <h2 class="text-2xl uppercase">New Post</h2>
    <CreatePost @savePost="saveNewPost"/>
  </div>
</template>

<script>
import axios from 'axios'
  import CreatePost from "~/components/NewPost/CreatePost.vue"
  export default {
    name: 'NewPost',
    data(){
      return{
      }
    },
    components:{
      CreatePost
    },
    methods:{
      saveNewPost(newPost){
        axios.post("https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts.json",newPost)
        .then(result => console.log(result))
        .catch(error => console.log(error))
        console.log(newPost)
      }
    }
  }
</script>
<style scoped>

</style>