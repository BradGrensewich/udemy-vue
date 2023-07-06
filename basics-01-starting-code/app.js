const app = Vue.createApp({
  data() {
    return {
      goal: 'Learn reactive frontend design',
      vueLink: 'https://vuejs.org'
    };
  }
});

app.mount('#user-goal')