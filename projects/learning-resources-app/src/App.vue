<template>
	<ul>
		<LearningResource
			v-for="resource in storedResources"
			:key="resource.id"
			:="resource"
		/>
	</ul>
</template>

<script>
import LearningResource from './components/LearningResource.vue';

export default {
	components: { LearningResource },
	data() {
		return {
			storedResources: [
				{
					id: 'official-guide',
					title: 'Official Guide',
					description: 'The official Vue.js documentation',
					link: 'https://vuejs.org',
				},
				{
					id: 'google',
					title: 'Google',
					description: 'Learn to Google',
					link: 'https://google.com',
				},
			],
		};
	},
};
</script>
