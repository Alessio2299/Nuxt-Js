<template>
  <div class="pt-12 pb-12 text-center w-2/5 m-auto">
    <h2 class="text-2xl uppercase">Edit Post {{this.$route.params.postid}}</h2>
    <div v-if="loading">
      <i class="my-10 fas fa-spinner"></i>  
      <h2>Loading in progress..</h2>
    </div>
    <CreatePost :post="editPost" :edit="true" v-if="!loading && save == false" @savePost="editNewPost"/>
    <div v-if="save">
      <i class="my10 fas fa-check"></i>
      <h2>Loading Complete</h2>
    </div>
  </div>
</template>


<script>
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
      return axios.get(`https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts/${context.params.postid}.json`)
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
    methods:{
      editNewPost(newPost){
        this.loading = true;
        axios.put(`https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts/${this.$route.params.postid}.json?auth=${this.$store.getters.getToken}`,newPost)
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
    },
    middleware: 'authMiddleware'
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
  