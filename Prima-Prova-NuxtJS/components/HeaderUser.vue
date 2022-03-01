
<template>
  <header>
    <NuxtLogo />
    <TitleUser />
    <ul>
      <li><nuxt-link to="/user/franco">Link User Id</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  header{
    text-align: center;
  }
</style>