<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="buttonClick">Emit event</button>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps(['fname', 'lname'])
const emit = defineEmits(['test'])

const userName = computed(() => {return props.fname + ' ' + props.lname})

const age = inject('age')

function buttonClick() {
    emit('test', (3 + age.value))
}
</script>