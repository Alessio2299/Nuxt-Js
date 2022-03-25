export default function({app, store, redirect, req}){
  let token;
  let tokenExpireIn;
  if(req){
    if(!req.headers.cookie){
      // Logout
    } else{
      token = app.$cookies.get('token');
      tokenExpireIn = app.$cookies.get('tokenExpireIn');
    }
  }else{
    token = localStorage.getItem('token');
    tokenExpireIn = localStorage.getItem('tokenExpireIn');
  }
  if(new Date().getTime() > Number.parseInt(tokenExpireIn)){
    redirect('/admin/auth')
  } else{
    store.commit("setToken", token)
  }
  if(!store.getters.isAuth){
    redirect('/admin/auth')
  }
}