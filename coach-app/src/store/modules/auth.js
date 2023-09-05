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
			return context.dispatch('authenticate', {
				...payload,
				mode: 'login',
			});
		},
		async signup(context, payload) {
			return context.dispatch('authenticate', {
				...payload,
				mode: 'signup',
			});
		},
		async authenticate(context, payload) {
			const mode = payload.mode;
			let url =
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';

			if (mode === 'signup') {
				url =
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwS71TkHVK4GpgHOGtxHtoeDkwHHsOGGY';
			}

			const response = await fetch(url, {
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

			localStorage.setItem('token', responseData.idToken);
			localStorage.setItem('userId', responseData.localId);

			context.commit('setUser', {
				token: responseData.idToken,
				userId: responseData.localId,
				tokenExpiration: responseData.expiresIn,
			});
		},
		tryLogin(context) {
			const userId = localStorage.getItem('userId');
			const token = localStorage.getItem('token');

			if (token && userId) {
				context.commit('setUser', {
					token: token,
					userId: userId,
					tokenExpiration: null,
				});
			}
		},
		logout(context) {
			context.commit('setUser', {
				token: null,
				userId: null,
				tokenExpiration: null,
			});
		},
	},
};
