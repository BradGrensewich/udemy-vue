<template>
	<div>
		<TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">ActiveGoals</button>
    <button @click="setSelectedComponent('ManageGoals')">ManageGoals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"/>
    <ManageGoals v-if="selectedComponent === 'ManageGoals'"/> -->
    <component :is="selectedComponent"></component>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
	components: {
		TheHeader,
		// BadgeList,
		// UserInfo,
		// CourseGoals,
		ActiveGoals,
		ManageGoals,
	},
	data() {
		return {
      selectedComponent: 'ActiveGoals',
			activeUser: {
				name: 'Brad Grensewich',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
