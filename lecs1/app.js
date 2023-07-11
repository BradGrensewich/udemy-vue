const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
      size: 5 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }    
  }
});

app.mount('#user-goals');
