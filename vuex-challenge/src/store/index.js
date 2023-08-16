import { createStore } from 'vuex';

import productsModule from './products/index.js';
import cartModule from './cart/index.js';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
	modules: { products: productsModule, cart: cartModule },
	state() {
		return {
			isLoggedIn: false,
		};
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters,
});

export default store;
