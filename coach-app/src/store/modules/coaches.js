export default {
	state() {
		return {
			coaches: [],
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
	},
	mutations: {
		registerCoach(state, payload) {
			state.coaches.push(payload);
		},
		setCoaches(state, payload) {
			state.coaches = payload;
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

			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
				{
					method: 'PUT',
					body: JSON.stringify(coachData),
				}
			);

			//const responseData = await response.json()

			if (!response.ok) {
				console.log('server error');
			}

			context.commit('registerCoach', { ...coachData, id: userId });
		},
		async loadCoaches(context) {
			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
			);
			const responseData = await response.json();

			if (!response.ok) {
				console.log('server error');
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
		},
	},
};
