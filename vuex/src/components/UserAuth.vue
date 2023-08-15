<template>
	<button v-if="!isLoggedIn" @click="setLogInStatus({ value: true })">
		Login
	</button>
	<button v-else @click="setLogInStatus({ value: false })">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	methods: {
		...mapActions(['setLogInStatus']),
	},
};
</script>
