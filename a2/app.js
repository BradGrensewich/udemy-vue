const app = Vue.createApp({
    data() {
        return {
            message: '',
            confirmedMessage: ''
        }
    },
    methods: {
        showAlert() {
            alert('ALERT!');
        },
        updateMessage(e) {
            this.message = e.target.value
        },
        confirmMessage() {
            this.confirmedMessage = this.message
        }
    }
});

app.mount('#assignment')