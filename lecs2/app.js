const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    countUp(num) {
      this.counter += num;
    },
    countDown(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
