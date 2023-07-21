<template>
	<div>
		<h1>Current User:</h1>
		<h2>{{ userName }}</h2>
		<h3>{{ userAge }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		userName: {
			type: String,
			required: true,
		},
		userAge: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
