import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()],
  strict: debug
})
