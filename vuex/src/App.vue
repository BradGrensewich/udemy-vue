<template>
	<base-container v-if="isLoggedIn" title="Vuex">
		<TheCounter />
		<ModifiedCounter />
		<button @click="addNine">Add 9</button>
		<ChangeCounter />
	</base-container>
  <BaseContainer title="Signin">
    <UserAuth ></UserAuth>
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import ModifiedCounter from './components/ModifiedCounter.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		ModifiedCounter,
    UserAuth
	},
	methods: {
		addNine() {
			this.$store.dispatch({
				type: 'increase',
				value: 9,
			});
		},
	},
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
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
