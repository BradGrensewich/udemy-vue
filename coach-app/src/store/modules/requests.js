export default {
	state() {
		return {
			requests: [],
		};
	},
	getters: {
		requests(state) {
			return state.requests;
		},
		hasRequests(_, getters) {
			return getters.requests && getters.requests.length > 0;
		},
	},
	mutations: {
		addRequest(state, payload) {
			state.requests.push(payload);
		},
		setRequests(state, payload) {
			console.log(payload)
			state.requests = payload;
		},
	},
	actions: {
		async contactCoach(context, payload) {
			const coachId = payload.coachId;
			const newRequest = {
				id: new Date().toISOString,
				userEmail: payload.email,
				message: payload.message,
			};
			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`,
				{
					method: 'POST',
					headers: { 'Content-type': 'application.json' },
					body: JSON.stringify(newRequest),
				}
			);

			if (!response.ok) {
				const error = new Error(
					response.message || 'Failed to send request'
				);
				throw error;
			}
			context.commit('addRequest', newRequest);
		},
		async loadRequests(context) {
			const userId = context.rootGetters.userId;
			const response = await fetch(
				`https://coach-app-3612f-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${userId}.json`
			);
			if (!response.ok) {
				const error = new Error(response.message || 'Failed to fetch!');
				throw error;
			}
			const responseData = await response.json();

			const requests = [];

			for (const key in responseData) {
				const request = {
					id: key,
					userEmail: responseData[key].userEmail,
					message: responseData[key].message,
				};
				requests.push(request);
			}
			console.log(requests);
			context.commit('setRequests', requests);
		},
	},
};
