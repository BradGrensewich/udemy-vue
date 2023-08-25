export default {
	state() {
		return {
			requests: []
		};
	},
	getters: {
		requests(state) {
			return this.requests
			
		}
	},
	mutations: {
		addRequest(state, payload) {
			state.requests.push(payload)
		}
	},
	actions: {
		contactCoach(context, payload) {
			const newRequest = {
				id: new Date().toISOString,
				coachId: payload.coachId,
				userEmail: payload.email,
				message: payload.message
			}
			context.commit('addRequest', newRequest)
		}
	},
};
