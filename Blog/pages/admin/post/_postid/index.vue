<template>
  <div class="pt-12 pb-12 text-center w-2/5 m-auto">
    <h2 class="text-2xl uppercase">Edit Post</h2>
    <div v-if="loading">
      <i class="my-10 fas fa-spinner"></i>  
      <h2>Loading in progress..</h2>
    </div>
    <CreatePost :post="editPost" v-if="!loading && save == false" @savePost="saveNewPost"/>
    <div v-if="save">
      <i class="my10 fas fa-check"></i>
      <h2>Loading Complete</h2>
    </div>
  </div>
</template>


<script>
  import CreatePost from "~/components/NewPost/CreatePost.vue"
  import axios from 'axios'
  export default {
    name: 'postId',
    data(){
      return{
        loading : false,
        save : false
      }
    },
    asyncData(context){
      console.log('ok');
      return axios.get(`https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
      .then(res => {
        console.log(res);
        return {
          editPost : res.data
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    components:{
      CreatePost
    },
    methods:{
      saveNewPost(newPost){
        this.loading = true;
        axios.post("https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts.json",newPost)
        .then(result => {
          console.log(result)
          this.loading = false;
          this.save = true;
          setTimeout(() => {
            this.$router.push("/");
          },2000)
        })        
        .catch(error => console.log(error))
        console.log(newPost)
      }
    }
  }
</script>
<style scoped>

  .fa-spinner,
  .fa-check{
    font-size: 40px;
  }
  .fa-spinner{
    animation: spinner 3s linear infinite;
  }
  @keyframes spinner {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

</style>
  