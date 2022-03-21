<template>
  <div>
    <div class="post">
      <h1>post {{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostId',
    fetch({ store }){
    },
    computed:{
    }
  }
</script>
