<template>
	<section class="container">
		<h2>{{ userName }}</h2>
	</section>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const userName = ref('Bradley');

		setTimeout(function () {
			userName.value = 'Brad';
		}, 4000);

		return { userName };
	},
	// data() {
	//   return {
	//     userName: 'Brad',
	//   };
	// },
};
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
