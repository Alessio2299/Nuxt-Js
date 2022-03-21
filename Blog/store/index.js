import Vuex from 'vuex'

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
