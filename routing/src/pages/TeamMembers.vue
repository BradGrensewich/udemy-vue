<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			></user-item>
		</ul>
		<router-link :to="teamMembersLink">Go to team 2</router-link>
	</section>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
	components: {
		UserItem,
	},
	inject: ['users', 'teams'],
	props: ['teamid'],
	created() {
		this.loadTeamMembers(this.teamid);
		console.log(this.$route.query);
	},
	// beforeRouteUpdate(to, from) {
	// 	console.log(to);
	// 	if (to.params.teamid === 't2') {
	// 		return true;
	// 	} else {
	// 		return { name: 'team-members', params: { teamid: 't2' } };
	// 	}
	// },
	methods: {
		loadTeamMembers(teamid) {
			//get member ids of selected team
			const selectedTeam = this.teams.find((team) => team.id === teamid);
			const teamMembers = selectedTeam.members;
			//get user info from users data
			const selectedMembers = [];
			for (const member of teamMembers) {
				const selectedUser = this.users.find(
					(user) => user.id === member
				);
				selectedMembers.push(selectedUser);
			}
			//add to data
			this.members = selectedMembers;
			this.teamName = selectedTeam.name;
		},
	},
	computed: {
		teamMembersLink() {
			return {
				name: 'team-members',
				params: { teamid: 't2' },
				query: { sort: 'asc' },
			};
		},
	},
	watch: {
		teamid(newId) {
			this.loadTeamMembers(newId);
		},
	},
	data() {
		return {
			teamName: '',
			members: [],
		};
	},
};
</script>

<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	border-radius: 12px;
}

h2 {
	margin: 0.5rem 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
