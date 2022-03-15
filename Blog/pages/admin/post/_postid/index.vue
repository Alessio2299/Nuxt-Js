<template>
  <div class="pt-12 pb-12 text-center w-2/5 m-auto">
    <h2 class="text-2xl uppercase">Edit Post : {{$route.params.postid}}</h2>
    <PostForm :post="editPost"/>
  </div>
</template>

<script>
  import PostForm from "~/components/NewPost/CreatePost.vue"
  export default {
    name: 'PostId',
    data(){
      return{
        editPost:{
          title: "WOWWW",
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