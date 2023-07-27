<template>
	<li>
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
		<p>{{ link }}</p>
	</li>
</template>

<script>
export default {
	props: ['title', 'description', 'link'],
};
</script>
