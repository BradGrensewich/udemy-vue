const app = Vue.createApp({
	data() {
		return {
            detailsVisible: false,
			friends: [
				{
					id: 'brad',
					name: 'Brad Grensewich',
					phone: '123456789',
					email: 'fake@gmail.com',
				},
				{
					id: 'vy',
					name: 'Vy Ngo',
					phone: '987654321',
					email: 'fakeagain@gmail.com',
				},
			],
		};
	},
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount('#app');
