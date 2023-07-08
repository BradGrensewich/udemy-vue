const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 100) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = ''
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = ''
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log("running again");
      return this.name + " " + "Grensewich";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
