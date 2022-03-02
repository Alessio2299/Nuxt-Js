<template>
  <div>
    <HeaderBlog />
    <div class="container px-4 md:px-0 max-w-6xl mx-auto mt-16">
      <div class="flex flex-wrap justify-between pt-12 mx-6">
        <PostPreview
          v-for="(post,index) in posts" :key="index"
          :id="post.id"
          :thumbnail="post.thumbnail"
          :title="post.title"
          :description="post.description"
          :userImg="post.userImg"
          :timeToRead="post.timeToRead"
          :dimension="post.dimension"
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
    data(){
      return{
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
    components:{
      PostPreview,
      HeaderBlog
    }
  }
</script>
