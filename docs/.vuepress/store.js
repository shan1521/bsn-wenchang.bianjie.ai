import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		currentIndex: 0,
	},
	mutations: {
		currentIndex(state,currentIndex){
			state.currentIndex = currentIndex;
		},
	}
})
