<template>
    <form @submit.prevent="updateUser">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="enteredAge">
        </div>
        <button>Update</button>
    </form>    
</template>

<script>
export default {
    emits: ['update-user'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        updateUser() {
            this.$emit('update-user', this.enteredName, this.enteredAge)            
        }
    }
}
</script>

<style></style>