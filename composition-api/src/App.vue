<template>
	<section class="container">
		<UserData :fname="fname" :lname="lname" @test="showEmittedArgument"></UserData>
		<button @click="increaseAge">Increase Age</button>
		<div>
			<input type="text" placeholder="First Name" v-model="fname" />
			<input type="text" placeholder="Last Name" ref="lastNameInput" />
			<button @click="setLastName">Set last name</button>
		</div>
	</section>
</template>

<script setup>
import { reactive, ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const fname = ref('');
const lname = ref('');
const lastNameInput = ref(null);

function setLastName() {
	lname.value = lastNameInput.value.value;
}

const age = ref(30);
function increaseAge() {
	age.value++;
}
provide('age', age)

function showEmittedArgument(value) {
	console.log(value)
}

// watch([userName, age], function(newValues, oldValues) {
// 	console.log('Old name: ' + oldValues[0])
// 	console.log('New name: ' + newValues[0])
// 	console.log('Old age: ' + oldValues[1])
// 	console.log('New name: ' + newValues[1])
// })
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>
