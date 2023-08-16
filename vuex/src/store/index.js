import { createStore } from 'vuex';

import rootGetters from './getters.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';

import counterModule from './counter/index.js';

const store = createStore({
	modules: { counter: counterModule },
	state() {
		return {
			isLoggedIn: false,
		};
	},
	getters: rootGetters,
	mutations: rootMutations,
	actions: rootActions,
});

export default store;
