<template>
	<BaseCard>
		<BaseButton @click="setSelectedTab('StoredResources')"
			>Stored Resources</BaseButton
		>
		<BaseButton @click="setSelectedTab('AddResource')"
			>Add Resources</BaseButton
		>
	</BaseCard>
	<component :is="selectedTab" :resources="resources"></component>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
	components: { AddResource, StoredResources },
	data() {
		return {
			selectedTab: 'StoredResources',
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
	methods: {
		setSelectedTab(tab) {
			this.selectedTab = tab;
		},
	},
    computed : {
        resources() {
            if (this.selectedTab === 'StoredResources') {
                return this.storedResources
            } else {
                return null
            }
        }
    }
};
</script>
