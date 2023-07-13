const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredText: '',
            listVisible: true            
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredText);
        },
        toggleListVisibility() {
            this.listVisible = !this.listVisible;
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1);
        }
    }, 
    computed: {
        buttonCaption() {
            return this.listVisible ? 'Hide List' : 'Show List';            
        }
    }

});

app.mount('#assignment');