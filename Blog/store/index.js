import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      prova: {

      }
    },
    mutations:{
      setProva(state,arr){
        state.prova = arr;
      }
    },
    actions:{
      actionProva(context, arr){
        context.commit("setProva", arr)
      }
    },
    getters:{
      getProva(state){
        return state.prova;
      }
    }
  })
}
export default createStore;
