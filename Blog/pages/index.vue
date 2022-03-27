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
  export default {
    name: 'IndexPage',
    data(){
      return{
      }
    }
  }
</script>
<style>
  html{
    font-family: 'Roboto';
  }
</style>