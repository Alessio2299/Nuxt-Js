import Vuex from 'vuex'
import Axios from 'axios'
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      idToken : null,
      posts: []
    },
    mutations:{
      setPost(state,posts){
        state.posts = posts;
      },
      newPost(state, newPost){
        state.posts.push(newPost);
      },
      setToken(state,idToken){
        state.idToken = idToken
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
      addPost(context,newPost){
        return axios.post("https://nuxt-blog-60810-default-rtdb.firebaseio.com/posts.json?auth=" + context.state.idToken ,newPost)
        .then(result => {
          context.commit('newPost', {...newPost, id : result.data.name})
        })        
        .catch(error => console.log(error))
      },
      actionPost(context, posts){
        context.commit("setPosts", posts)
      }
    },
    getters:{
      getPost(state){
        return state.posts;
      },
      getToken(state){
        return state.idToken;
      },
      isAuth(state){
        return state.idToken != null;
      }
    }
  })
}
export default createStore;
