const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    countUp(num) {
      this.counter += num;
    },
    countDown(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
