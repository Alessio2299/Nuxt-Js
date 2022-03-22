<template>
  <div>
    <div class="post">
      <h1>post {{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'PostId',
    asyncData(context){
      axios.get(`https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
      .then(resp => {
        console.log(resp)
        return {currentPost : resp.data}
      })
      .catch(error => console.log(error));
    },
    computed:{
    }
  }
</script>
