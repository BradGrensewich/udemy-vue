import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
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
            console.log(context)
			setTimeout(function () {
				context.commit('increase', payload);
			}, 1000);
		},
	},
});

const app = createApp(App);

app.use(store);
app.mount('#app');
