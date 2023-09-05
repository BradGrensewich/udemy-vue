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
		token(state) {
			return state.token;
		},
		isAuthenticated(state) {
			return !!state.token;
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
		async login(context, payload) {
			const endPoint =
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';
			const payloadObject = {
				...payload,
				endPoint: endPoint,
			};
			try {
				await context.dispatch('authenticate', payloadObject);
			} catch (error) {
				throw error;
			}
		},
		async signup(context, payload) {
			const endPoint =
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';
			const payloadObject = {
				...payload,
				endPoint: endPoint,
			};
			try {
				await context.dispatch('authenticate', payloadObject);
			} catch (error) {
				throw error;
			}
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
				const error = new Error(
					responseData.message ||
						'Failed to authenticate! Check your credentials'
				);
				throw error;
			}

			context.commit('setUser', {
				token: responseData.idToken,
				userId: responseData.localId,
				tokenExpiration: responseData.expiresIn,
			});
		},
        logout(context) {
            context.commit('setUser', {
                token: null,
                userId: null,
                tokenExpiration: null
            })
        }
	},
};
