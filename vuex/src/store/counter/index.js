import counterGetters from './getters.js';
import counterMutations from './mutations.js';
import counterActions from './actions.js';

const counterModule = {
	namespaced: true,
	state() {
		return {
			counter: 0,
		};
	},
	getters: counterGetters,
	mutations: counterMutations,
	actions: counterActions,
};

export default counterModule;
