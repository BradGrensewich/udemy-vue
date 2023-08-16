import cartGetters from './getters.js';
import cartMutations from './mutations.js';
import cartActions from './actions.js';

const store = {
	state() {
		return {
			cart: { items: [], total: 0, qty: 0 },
		};
	},
	getters: cartGetters,
	mutations: cartMutations,
	actions: cartActions,
};

export default store;
