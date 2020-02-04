import Vue from 'vue'
import App from '@/components/App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'

window.$ = require('jquery')

Vue.use(VueResource)

Vue.config.productionTip = false

export const bus = new Vue();

Vue.http.interceptors.push((request) => {
  let isLogin = false
  // console.log(request.method)
  if(request.method == 'POST') {
    // console.log(request.url)
    if(request.url.endsWith('/login')) {
      isLogin = true
    }
  }
  
  if(!isLogin) {
    let token = store.getters['auth/token']
    request.headers.set('Accept', 'application/json')
    request.headers.set('Authorization', 'Bearer ' + token)
  }

  request.headers.set('X-CSRF-TOKEN', window.$('meta[name="csrf-token"]').attr('content'));

  return function(response) {
    if(response.body.token != null) {
      let newToken = response.body.token;
      // newToken = newToken.substring("Bearer ".length)
      // console.log('Atualizando o token para: ' + newToken) // 'Bearer '
      store.commit('auth/setToken', newToken)
    }
    
    switch (response.status) {
      case 401:
        this.$store.commit('auth/sair')
        break;

      case 501:
        // this.$store.commit('sistema/alerta', 'O serviço da aplicação está indisponível')
        break;

      case 503:
        // this.$store.commit('sistema/alerta', 'Ocorreu um erro interno no serviço da aplicação')
        break;
    
      default:
        break;
    }
    
    return response;
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
