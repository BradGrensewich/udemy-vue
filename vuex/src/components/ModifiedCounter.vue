<template>
	<h3>{{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters('counter' ,['normalizedCounter']),
	},
};
</script>
