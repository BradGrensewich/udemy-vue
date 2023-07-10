const app = Vue.createApp({
  data() {
    return {
      goalA: 'Learn reactive frontend design',
      goalB: 'Master Vue',
      vueLink: 'https://vuejs.org',
      sampleTitle: '<h2>This was made with Vue!</h2>'
    };
  },
  methods: {
    outputGoal () {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.goalA;
        } else {
            return this.goalB;
        }
    }
  }
});

app.mount('#user-goal')