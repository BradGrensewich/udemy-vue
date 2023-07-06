const app = Vue.createApp({
  data() {
    return {
      goal: 'Learn reactive frontend design',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal () {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return 'Learn Vue';
        } else {
            return 'Master Vue';
        }
    }
  }
});

app.mount('#user-goal')