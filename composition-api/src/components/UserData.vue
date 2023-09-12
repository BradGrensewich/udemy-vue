<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['fname', 'lname', 'age'])

const userName = computed(() => {return props.fname + ' ' + props.lname})
</script>