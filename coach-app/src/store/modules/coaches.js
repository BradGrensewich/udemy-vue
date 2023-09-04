export default {
	state() {
		return {
			coaches: [],
			lastFetch: null,
		};
	},
	getters: {
		coaches(state) {
			return state.coaches;
		},
		hasCoaches(state) {
			return state.coaches && state.coaches.length > 0;
		},
		isCoach(_, getters, _2, rootGetters) {
			const coaches = getters.coaches;
			const userId = rootGetters.userId;
			return coaches.some((coach) => coach.id === userId);
		},
		shouldUpdate(state) {
			const lastFetch = state.lastFetch;
			if (!lastFetch) {
				return true;
			}
			const currTime = new Date().getTime();
			return (currTime - lastFetch) / 1000 > 60;
		},
	},
	mutations: {
		registerCoach(state, payload) {
			state.coaches.push(payload);
		},
		setCoaches(state, payload) {
			state.coaches = payload;
		},
		setFetchTimestamp(state) {
			state.lastFetch = new Date().getTime();
		},
	},
	actions: {
		async registerCoach(context, data) {
			const userId = context.rootGetters.userId;
			const coachData = {
				firstName: data.first,
				lastName: data.last,
				description: data.desc,
				hourlyRate: data.rate,
				areas: data.areas,
			};

			const token = context.rootGetters.token;

			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
				{
					method: 'PUT',
					body: JSON.stringify(coachData),
				}
			);

			if (!response.ok) {
				const error = new Error(
					response.message ||
						'Failed to register as a coach! Are you logged in?'
				);
				throw error;
			}

			context.commit('registerCoach', { ...coachData, id: userId });
		},
		async loadCoaches(context, payload) {
			if (!context.getters.shouldUpdate && !payload.forceRefresh) {
				console.log('fetch not neccessary. using cached data');
				return;
			}

			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
			);
			const responseData = await response.json();

			if (!response.ok) {
				const error = new Error(
					responseData.message || 'Failed to fetch!'
				);
				throw error;
			}

			const coaches = [];

			for (const key in responseData) {
				const coach = {
					id: key,
					firstName: responseData[key].firstName,
					lastName: responseData[key].lastName,
					description: responseData[key].description,
					hourlyRate: responseData[key].hourlyRate,
					areas: responseData[key].areas,
				};
				coaches.push(coach);
			}
			context.commit('setCoaches', coaches);
			context.commit('setFetchTimestamp');
		},
	},
};
