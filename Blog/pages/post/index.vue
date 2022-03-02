<template>
  <div>
    <HeaderBlog />
    <div class="container px-4 md:px-0 max-w-6xl mx-auto mt-16">
      <div>
        <h1>post</h1>
        <nuxt-link to="/post/1">Post 1</nuxt-link>
        <nuxt-link to="/post/2">Post 2</nuxt-link>
        <nuxt-link to="/post/3">Post 3</nuxt-link>
      </div>
      <div class="flex flex-wrap justify-between pt-12 mx-6">
        <PostPreview 
          id="1"
          thumbnail="https://source.unsplash.com/collection/225/800x600"
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          userImg="http://i.pravatar.cc/301"
          timeToRead="1 MIN READ"
        />
        <PostPreview 
          id="2"
          thumbnail="https://source.unsplash.com/collection/3106804/800x600"
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          userImg="http://i.pravatar.cc/300"
          timeToRead="1 MIN READ"
        />
        <PostPreview 
          id="3"
          thumbnail="https://source.unsplash.com/collection/310/800x600"
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
          userImg="http://i.pravatar.cc/302"
          timeToRead="1 MIN READ"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import PostPreview from "~/components/PostPreview.vue"
  import HeaderBlog from "~/components/HeaderBlog.vue"

  export default {
    name: 'Post',
    components:{
      PostPreview,
      HeaderBlog
    }
  }
</script>
