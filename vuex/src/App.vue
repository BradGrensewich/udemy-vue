<template>
	<base-container title="Vuex">
		<TheCounter />
		<ModifiedCounter />
		<button @click="addNine">Add 9</button>
		<ChangeCounter />
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import ModifiedCounter from './components/ModifiedCounter.vue';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		ModifiedCounter,
	},
	methods: {
		addNine() {
			this.$store.dispatch({
				type: 'increase',
				value: 9,
			});
		},
	},
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
</style>
