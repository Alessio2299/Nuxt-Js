<template>
  <div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-12">Post</h1>
      <div class="post flex w-2/3 mx-auto mt-5 mb-10 bg-white rounded overflow-hidden shadow-lg">
        <div class="w-full md:w-2/3 rounded-t">
          <img :src="currentPost.image" class="my_img h-full w-full shadow">
        </div>
        <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div class="text flex-1 bg-white rounded-t overflow-auto rounded-b-none shadow-lg">
            <h2 class="w-full text-xl font-bold text-gray-900 pt-6 pb-10 px-6">{{currentPost.title}}</h2>
            <p class="text-gray-800 font-serif text-base px-6 mb-5">
              {{currentPost.description}}
            </p>
          </div>

          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="my_avatar w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src="currentPost.userImg" alt="Avatar of Author">
              <p class="text-gray-600 text-xs md:text-sm">{{currentPost.timeToRead}} Minute to Read</p>
            </div>
          </div>
        </div>
			</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'PostId',
    asyncData(context){
      return axios.get(`https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
      
      .then(res => {
        console.log(res);
        return {
          currentPost : res.data
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
</script>
<style scoped>
  .post{
    height: 400px;
  }
  .text{
    word-break: break-all;
  }
  .my_avatar,
  .my_img{
    object-fit: cover;
    object-position: center;
  }
</style>