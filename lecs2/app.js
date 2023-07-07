const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    countUp(num) {
      this.counter += num;
    },
    countDown(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
