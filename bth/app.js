const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		// saveInput(event) {
		// 	this.currentUserInput = event.target.value;
		// },
		setText() {
			//this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
		},
	},
});
const app2 = Vue.createApp({
	template: `
  <p>{{ meal }}</p>
  `,
	data() {
		return {
			meal: 'pizza',
		};
	},
});

app.mount('#app');
app2.mount('#app2');

// ...

const data = {
	message: 'Hello',
	longMessage: 'Hello, world',
};

const handler = {
	set(target, key, value) {
		if (key === 'message') {
			target.longMessage = value + ' is a nice girl';
		}
		target.message = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.message = 'Vy';

console.log(proxy.longMessage);
