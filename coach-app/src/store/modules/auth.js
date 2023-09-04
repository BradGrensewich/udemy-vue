export default {
	state() {
		return {
			userId: null,
			token: null,
			tokenExpiration: null,
		};
	},
	getters: {
		userId(state) {
			return state.userId;
		},
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token;
			state.userId = payload.userId;
			state.tokenExpiration = payload.tokenExpiration;
		},
	},
	actions: {
		login(context, payload) {
			const endPoint =
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';
			const payloadObject = {
				...payload,
				endPoint: endPoint,
			};
			context.dispatch('authenticate', payloadObject);
		},
		signup(context, payload) {
			const endPoint =
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';
			const payloadObject = {
				...payload,
				endPoint: endPoint,
			};
			context.dispatch('authenticate', payloadObject);
		},
		async authenticate(context, payload) {
			const response = await fetch(payload.endPoint, {
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			});

			const responseData = await response.json();

			if (!response.ok) {
				console.log(responseData);
				const error = new Error(
					responseData.message || 'Failed to signup!'
				);
				throw error;
			}

			context.commit('setUser', {
				token: responseData.idToken,
				userId: responseData.localid,
				tokenExpiration: responseData.expiresIn,
			});
		},
	},
};
