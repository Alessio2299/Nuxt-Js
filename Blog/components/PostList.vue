<template>
  <div>
    <div v-if="posts.length > 0" class="posts flex flex-wrap justify-between pt-12 mx-6">
      <PostPreview
        v-for="(post,index) in posts.slice(start,last)" :key="index"
        :id="post.id"
        :thumbnail="post.thumbnail"
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
        last: "",
        posts:[
          {
            dimension: "1/3",
            id: "1",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/310/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/300",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/3",
            id: "2",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/309/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/303",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/3",
            id: "3",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/301/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/302",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/2",
            id: "4",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/330/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/310",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/2",
            id: "5",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/350/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/332",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/3",
            id: "6",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/398/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/313",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/3",
            id: "7",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/314/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/307",
            timeToRead: "1 MIN READ"
          },
          {
            dimension: "1/3",
            id: "8",
            title: "Lorem ipsum dolor sit amet.",
            thumbnail: "https://source.unsplash.com/collection/312/800x600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
            userImg: "http://i.pravatar.cc/309",
            timeToRead: "1 MIN READ"
          }
        ]
      }
    },
    mounted(){
      if(this.type == "all"){
        this.last = this.posts.length
      } else if (this.type == "principal"){
        if (this.posts.length > 2){
          this.last = 2
        } else if(this.posts.length < 2){
          this.last = 1
        }
      }
    }
  }
</script>
