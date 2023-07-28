<template>
	<BaseCard>
		<BaseButton
			@click="setSelectedTab('StoredResources')"
			:mode="storedResButtonMode"
			>Stored Resources</BaseButton
		>
		<BaseButton
			@click="setSelectedTab('AddResource')"
			:mode="addResButtonMode"
			>Add Resources</BaseButton
		>
	</BaseCard>
	<component :is="selectedTab" :resources="resources" @save-resource="addSavedResource"></component>
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
        addSavedResource(title, description, link) {
            this.storedResources.push({
                id: Date.now(),
                title: title,
                description: description,
                link: link
            })
        }
	},
	computed: {
		resources() {
			if (this.selectedTab === 'StoredResources') {
				return this.storedResources;
			} else {
				return null;
			}
		},
		storedResButtonMode() {
			return this.selectedTab === 'StoredResources' ? null : 'flat';
		},
		addResButtonMode() {
			return this.selectedTab === 'AddResource' ? null : 'flat';
		},
	},
};
</script>
