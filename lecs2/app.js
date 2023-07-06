const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    countUp() {
      this.counter++;
    },
    countDown() {
      this.counter--;
    }
  }
});

app.mount('#events');
