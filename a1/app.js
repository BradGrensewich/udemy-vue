const app = Vue.createApp({
    data () {
        return {
            name: 'Brad',
            age: 30,
            imgURL: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80'
        }
    },
    methods: {
        getNumber () {
            return Math.random();
        }
    }
});

app.mount('#assignment');