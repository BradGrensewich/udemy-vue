<template>
    <section>
        <form @submit.prevent="updateData">
            <input type="text" name="name" placeholder="Your name" v-model.lazy="enteredName">
            <input type="text" name="age" placeholder="Your age" v-model.lazy="enteredAge">
            <button>Set User Data</button> 
        </form>      
    </section>

</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }        
    },
    methods: {
        updateData() {
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }

}
</script>

