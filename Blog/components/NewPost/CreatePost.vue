<template>
  <div>
    <div class="form p-5 relative flex flex-col text-black mt-10 rounded-lg">
      <input class="mb-5" type="text" v-model="newPost.title" placeholder="Title">
      <input class="mb-5" type="text" v-model="newPost.image" placeholder="Thumbnail">
      <input class="mb-5" type="text" v-model="newPost.userImg" placeholder="User Image">
      <input class="mb-5" type="number" min="1" max="3" v-model="newPost.dimension" placeholder="Number of Dimension">
      <textarea class="mb-5" v-model="newPost.description" placeholder="Description"></textarea>
      <input class="mb-5" v-model="newPost.timeToRead" type="number" min="1" max="60" placeholder="Time to Read">
      <div class="btn">
        <button @click="save" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Create
        </button>
        <button @click="cancel" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CreatePost',
    data(){
      return{
        newPost: this.post ? { ...this.post } : 
        {
          title: "",
          image: "",
          description: "",
          timeToRead: "",
          userImg: "",
          dimension: ""
        }
      }
    },
    components:{
    },
    methods:{
      cancel(){
        this.$router.push("/admin")
      },
      save(){
        // console.log(this.newPost);
        this.$emit("savePost", this.newPost);
      }
    }
  }
</script>
<style scoped>
  .form{
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.39);
  }
  input,
  textarea{
    border: 1px solid rgba(0, 0, 0, 0.164);
  }
  input{
    padding: 2px;
  }
  .form::after{
    content: "";
    height: 60px;
    transform: rotateZ(40deg);
    width: 15px;
    background-color: black;
    position: absolute;
    bottom: 85%;
    left: 5px;
  }
  .form::before{
    content: "";
    height: 60px;
    transform: rotateZ(-40deg);
    width: 15px;
    background-color: black;
    position: absolute;
    bottom: 85%;
    right: 5px;
  }
</style>