<template>
  <div>
    <div class="max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-5">Home</h1>
      <PostList 
        type="principal"
      />
    </div>
  </div>
</template>

<script>
  import PostList from "~/components/PostList.vue"

  export default {
    name: 'IndexPage',
    data(){
      return{
        prova: "Ciao"
      }
    },
    components:{
      PostList
    },
    mounted(){
      this.$store.dispatch("actionProva", this.prova)
    }
  }
</script>
<style>
  html{
    font-family: 'Roboto';
  }
</style>