<template>
    <section>
        <active-user v-bind="user"></active-user>
        <user-data @update-user="updateUser"></user-data>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                userName: '',
                userAge: ''
            }
            
        }
    },
    methods: {
        updateUser(name, age) {            
            this.user.userName = name;
            this.user.userAge = age;            
        }
    }

}
</script>

<style>

</style>