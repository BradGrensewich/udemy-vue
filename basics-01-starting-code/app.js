const app = Vue.createApp({
  data() {
    return {
      goalA: 'Learn reactive frontend design',
      goalB: 'Master Vue',
      vueLink: 'https://vuejs.org'
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