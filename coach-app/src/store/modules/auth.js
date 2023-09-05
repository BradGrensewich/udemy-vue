let timer;

export default {
	state() {
		return {
			userId: null,
			token: null,
            didAutoLogout: false
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
        didAutoLogout(state) {
            return state.didAutoLogout
        }
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token;
			state.userId = payload.userId;
			state.tokenExpiration = payload.tokenExpiration;
            state.didAutoLogout = false
		},
        setAutoLogout(state) {            
            state.didAutoLogout = true
        }
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

			//milliseconds
			const expiresIn = +responseData.expiresIn * 1000;            
			const expirationDate = new Date().getTime() + expiresIn;

			localStorage.setItem('token', responseData.idToken);
			localStorage.setItem('userId', responseData.localId);
			localStorage.setItem('tokenExpiration', expirationDate);

			timer = setTimeout(function () {
				context.dispatch('autoLogout');
			}, expiresIn);

			context.commit('setUser', {
				token: responseData.idToken,
				userId: responseData.localId,
			});
		},
		tryLogin(context) {
			const userId = localStorage.getItem('userId');
			const token = localStorage.getItem('token');
            const tokenExpiration = localStorage.getItem('tokenExpiration')            

            const expiresIn = +tokenExpiration - new Date().getTime()

            if (expiresIn < 0) {
                return;
            }

            timer = setTimeout(function () {
				context.dispatch('autoLogout');
			}, expiresIn);

			if (token && userId) {
				context.commit('setUser', {
					token: token,
					userId: userId,
				});
			}
		},
		logout(context) {
			localStorage.removeItem('token');
			localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration')

			context.commit('setUser', {
				token: null,
				userId: null,
			});
		},
        autoLogout(context) {
            context.dispatch('logout')
            context.commit('setAutoLogout')
        }
	},
};
