import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  show:true
  },
  mutations: {
	  changeShow(state){
		  state.show = !state.show;
	  }
  },
  actions: {
  },
  modules: {
  }
})
