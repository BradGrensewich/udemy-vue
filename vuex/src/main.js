import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
	state() {
		return {
			counter: 0,
			isLoggedIn: false,
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
		isLoggedIn(state) {
			return state.isLoggedIn;
		},
	},
	mutations: {
		increase(state, payload) {
			state.counter += payload.value;
		},
		setLogInStatus(state, payload) {
			state.isLoggedIn = payload.value;
		},
	},
	actions: {
		increase(context, payload) {
			setTimeout(function () {
				context.commit('increase', payload);
			}, 1000);
		},
        setLogInStatus(context, payload) {
            context.commit('setLogInStatus', payload)
        }
	},
});

const app = createApp(App);

app.use(store);
app.mount('#app');
