
<template>
  <div>
    <h1>NuxtJS</h1>
    <h3>Home</h3>
        Link Per collegarsi alla pagina User con Server Side
    <ul>
      <li>
        <a href="/user">Server-side</a>
      </li>
    </ul>
    Link Per collegarsi alla pagina User con Client Side
    <ul>
      <li>
        <nuxt-link to="/user">Client-side</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>
<style scoped>
  ul{
    list-style: none;
  }
</style>
