<template>
  <div :class="`w-full md:w-${dimension} p-6 flex flex-col flex-grow flex-shrink`">
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      <nuxt-link :to="`/post/${id}`" class="flex flex-wrap no-underline hover:no-underline">
        <img :src="thumbnail" :class="`h-${dimension} w-full rounded-t pb-6`">
        <div class="w-full font-bold text-xl text-gray-900 px-6">{{title}}</div>
        <p class="text-gray-800 font-serif text-base px-6 mb-5">{{description}}</p>
      </nuxt-link>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
      <div class="flex items-center justify-between">
        <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src="userImg" alt="Avatar of Author" tabindex="0">
        <p class="text-gray-600 text-xs md:text-sm">{{timeToRead}}</p>
      </div>
    </div>
    <button v-if="isAdmin" @click="toEdit" class=" w-2/5 m-auto mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Edit
    </button>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  data(){
    return{

    }
  },
  methods:{
    toEdit(){
      this.$router.push('/admin/post/_postid');
    }
  },
  props:{
    id: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    userImg: {
      type: String,
      required: true
    },
    timeToRead: {
      type: String,
      required: true
    },
    dimension: {
      type: String,
      required: true
    },
    isAdmin:{
      type: Boolean,
      default: false
    }
  }
}
</script>
