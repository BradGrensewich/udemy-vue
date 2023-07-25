<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
    <CourseGoals>
      <template #default="exampleObject">
        <h3>{{ exampleObject.item }}</h3>
        <p> {{ exampleObject.anotherItem }}</p>
      </template>
    </CourseGoals>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
	components: {
		TheHeader,
		BadgeList,
		UserInfo,
    CourseGoals
	},
	data() {
		return {
			activeUser: {
				name: 'Brad Grensewich',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
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
