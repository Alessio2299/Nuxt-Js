<template>
  <div>
    <div class="max-w-6xl mx-auto -mt-20">
      <h1 class="text-white uppercase text-5xl ml-3 pb-3">About</h1>
      <p class="pt-12 mx-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate illo maxime aliquid exercitationem. 
        Consequatur quisquam vel non ut mollitia esse repellat minus error ab. 
        Blanditiis saepe minus molestias corporis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ullam explicabo laborum error dolore voluptatum dicta maxime fugiat! 
        Iste assumenda deserunt veritatis vel, eligendi in voluptatibus repellat, minus alias quasi perferendis.
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'About',
    data(){
      return{
        prova:""
      }
    },
    components:{
    },
    mounted(){
      this.prova = this.$store.getters.getProva;
    }
  }
</script>