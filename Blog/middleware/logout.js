export default function({app, store, redirect, req}){
  app.$cookies.removeAll();
  store.commit('clearToken')
  if(process.client){
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpireIn');

  }
  redirect('/admin/auth')
}