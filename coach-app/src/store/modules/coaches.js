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
            const coaches = getters.coaches
            const userId = rootGetters.userId
            return coaches.some(coach => coach.id === userId)
        }
	},
	mutations: {
		registerCoach(state, payload) {
			state.coaches.push(payload);
			console.log(state.coaches);
		},
	},
	actions: {
		registerCoach(context, data) {
			const coach = {
				id: context.rootGetters.userId,
				firstName: data.first,
				lastName: data.last,
				description: data.desc,
				hourlyRate: data.rate,
				areas: data.areas,
			};
			context.commit('registerCoach', coach);
		},
	},
};
