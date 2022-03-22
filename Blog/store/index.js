import Vuex from 'vuex'
import Axios from 'axios'
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations:{
      setPost(state,posts){
        state.posts = posts;
      }
    },
    actions:{
      nuxtServerInit(context){
        return axios.get("https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
          const arrPost = [];
          for(let key in response.data){
            arrPost.push({...response.data[key], id : key })
          }
          context.commit("setPost", arrPost)
        })
        .catch(error => console.log(error));
      },
      actionPost(context, posts){
        context.commit("setPosts", posts)
      }
    },
    getters:{
      getPost(state){
        return state.posts;
      }
    }
  })
}
export default createStore;
