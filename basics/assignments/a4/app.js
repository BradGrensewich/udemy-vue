const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      isVisible: true,
      userColor: "",
    };
  },
  computed: {
    visibleClass() {
      return {
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
