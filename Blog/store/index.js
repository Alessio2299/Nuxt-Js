import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      post: {

      }
    },
    mutations:{
      setPost(state,post){
        state.post = post;
      }
    },
    actions:{
      nuxtServerInit(context){
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            context.commit("setPost",{
              postApi: {
                dimension: "1/3",
                id: "PostApi",
                title: "Lorem ipsum dolor sit amet.",
                thumbnail: "postApi",
                description: "postApi",
                userImg: "PostAPi",
                timeToRead: "1 MIN READ"
              }
            })
            resolve();
          },2000)
        })
      },
      actionPost(context, post){
        context.commit("setPost", post)
      }
    },
    getters:{
      getPost(state){
        return state.post;
      }
    }
  })
}
export default createStore;
