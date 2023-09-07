<template>
	<section class="container">
		<h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';


const user = reactive({name: 'Bradley', age: 30})
// const userName = ref('Bradley');
// const age = ref(30)

setTimeout(function () {
	user.name = 'Brad';
  user.age = 31
}, 4000);		
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
