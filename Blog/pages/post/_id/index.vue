<template>
  <div>
    <HeaderBlog />
    <div class="post">
      <h1>post {{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
  import HeaderBlog from "~/components/HeaderBlog.vue"
  export default {
    name: 'PostId',
    components:{
      HeaderBlog
    }
  }
</script>
