<template>
  <div>
    <div v-if="posts.length > 0" class="posts flex flex-wrap justify-between pt-12 mx-6">
      <PostPreview
        v-for="(post,index) in posts.slice(start,last)" :key="index"
        :id="post.id"
        :thumbnail="post.image"
        :title="post.title"
        :description="post.description"
        :userImg="post.userImg"
        :timeToRead="post.timeToRead"
        :dimension="post.dimension"
        :isAdmin="admin"
      />
    </div>
    <div v-else>
      <span class="text-3xl">Non è presente nessun post</span>
    </div>
  </div>
</template>
<script>
  import PostPreview from "~/components/PostPreview.vue"

  export default{
    name: "PostList",
    components:{
      PostPreview
    },
    props:{
      type:{
        type: String,
        required: true
      },
      admin:{
        type: Boolean
      }
    },
    data(){
      return{
        start: 0,
        last: 2,
        posts:[]
      }
    },
    mounted(){
      if(this.type == "all"){
        this.posts = this.$store.getters.getPost;
        this.last = this.posts.length;
      } else if (this.type == "principal"){
        this.posts = this.$store.getters.getPost;
        this.last = 2;
      }
    }
  }
</script>
