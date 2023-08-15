import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
	state() {
		return {
			counter: 0,
		};
	},
	getters: {
		count(state) {
			return state.counter;
		},
		normalizedCounter(_, getters) {
			const count = getters.count;
			if (count < 0) {
				return 0;
			} else if (count > 100) {
				return 100;
			} else {
				return count;
			}
		},
	},
	mutations: {
		increase(state, payload) {
			state.counter += payload.value;
		},
	},
	actions: {
		increase(context, payload) {
			context.commit('increase', payload);
		},
	},
};
const store = createStore({
	modules: { counter: counterModule },
	state() {
		return {
			isLoggedIn: false,
		};
	},
	getters: {
		isLoggedIn(state) {
			return state.isLoggedIn;
		},
	},
	mutations: {
		setLogInStatus(state, payload) {
			state.isLoggedIn = payload.value;
		},
	},
	actions: {
		setLogInStatus(context, payload) {
			context.commit('setLogInStatus', payload);
		},
	},
});

const app = createApp(App);

app.use(store);
app.mount('#app');
