<template>
    <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
    methods: {
        addTwo() {
            this.$store.dispatch({
                type: 'increase',
                value: 2
            })
        }
    }
}
</script>