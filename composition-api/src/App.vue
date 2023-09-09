<template>
	<section class="container">
		<h2>{{ user.name }}</h2>
		<h3>{{ user.age }}</h3>
		<button @click="increaseAge">Increase Age</button>
		<div>
			<input type="text" placeholder="First Name" v-model="fname" />
			<input type="text" placeholder="Last Name" v-model="lname" />
		</div>
	</section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const fname = ref('');
const lname = ref('');
const userName = computed(function() {
	return fname.value + ' ' + lname.value;
});

const age = ref(30);
function increaseAge() {
	age.value++;
}

const user = reactive({
	name: userName,
	age: age
})


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
