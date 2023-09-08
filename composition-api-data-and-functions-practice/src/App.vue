<template>
	<h2>My Course Goal</h2>	
	<h3 v-if="goal.visiblilty">{{ goal.value }}</h3>	
	<button @click="toggleVisibility">Toggle Goal</button>
	<!-- Task 3: Manage data in three ways -->
	<!-- => Separate refs -->
	<!-- => Ref Object -->
	
	<!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { reactive } from 'vue';

const goal = reactive({ value: 'Learn compostion API', visiblilty: true });
function toggleVisibility() {
	goal.visiblilty = !goal.visiblilty;
}


// data() {
//   return {
//     goal: 'learn composition API'
//     goalVisibility: true
//   }
// },

// methods: {
//   toggleVisibility() {
//     this.goalVisibility = !this.goalVisibility
//   }
// }
</script>

<style>
html {
	font-family: sans-serif;
}
body {
	margin: 3rem;
	text-align: center;
}
</style>
