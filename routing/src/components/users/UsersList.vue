<template>
	<button @click="dummySubmitAndNav">Confirm</button>
	<button @click="saveChanges">Save Changes</button>
	<ul>
		<user-item
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"
		></user-item>
	</ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
	components: {
		UserItem,
	},
	data() {
		return {
			changesSaved: false,
		};
	},
	inject: ['users'],
	methods: {
		dummySubmitAndNav() {
			console.log('dummy submission action');
			this.$router.push('/teams');
		},
		saveChanges() {
			this.changesSaved = true;
		},
	},
	beforeRouteEnter() {
		console.log('Called beforeRoute enter in UserList component');
	},
	beforeRouteLeave() {
		if (this.changesSaved) {
			return true
		} else {
			return confirm('Are you sure? You have unsaved changes.')
		}	
	}
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	max-width: 20rem;
	padding: 0;
}
</style>
