<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="buttonClick">Emit event</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['fname', 'lname', 'age'])
const emit = defineEmits(['test'])

const userName = computed(() => {return props.fname + ' ' + props.lname})

function buttonClick() {
    emit('test', (3 + props.age))
}
</script>