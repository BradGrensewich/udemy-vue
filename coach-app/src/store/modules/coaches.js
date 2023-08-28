export default {
	state() {
		return {
			coaches: [
				{
					id: 'c1',
					firstName: 'Brad',
					lastName: 'Grensewich',
					areas: ['frontend', 'backend', 'career'],
					description:
						"I'm Brad and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
					hourlyRate: 30,
				},
				{
					id: 'c2',
					firstName: 'Julie',
					lastName: 'Jones',
					areas: ['frontend', 'career'],
					description:
						'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
					hourlyRate: 30,
				},
			],
		};
	},
	getters: {
		coaches(state) {
			console.log('getting coaches');
			console.log(state.coaches);
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
			console.log(state.coaches);
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
	},
};
