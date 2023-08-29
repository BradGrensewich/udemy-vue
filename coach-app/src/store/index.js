import { createStore } from 'vuex';

import coachesModule from './modules/coaches.js';
import requestsModule from './modules/requests.js';

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestsModule,
	},
	state() {
		return {
			userId: 'c4',
		};
	},
	getters: {
		userId(state) {
			return state.userId;
		},
	},
});

export default store;
