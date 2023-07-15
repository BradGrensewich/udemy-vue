const app = Vue.createApp({
	data() {
		return {
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
   
});

app.component('friend-contact', {
    template: `
    <li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">
			{{ detailsVisible ? 'Hide' : 'Show'}} details
		</button>
		<ul v-if="detailsVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
    `,
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'brad',
				name: 'Brad Grensewich',
				phone: '123456789',
				email: 'fake@gmail.com',
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }

})

app.mount('#app');
