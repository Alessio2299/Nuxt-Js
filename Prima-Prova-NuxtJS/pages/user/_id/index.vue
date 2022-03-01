<template>
  <div>
    <NuxtLogo />
    <h1>User {{$route.params.id}}</h1>
    <ul>
      <li><nuxt-link to="/user/franco/profile">Link Profile {{$route.params.id}}</nuxt-link></li>
    </ul>
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
