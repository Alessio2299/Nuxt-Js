<template>
  <div>
    <NuxtLogo />
    <h1>Profilo {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexUserId'
}
</script>

<style scoped>
  div{
    text-align: center;
  }
</style>
