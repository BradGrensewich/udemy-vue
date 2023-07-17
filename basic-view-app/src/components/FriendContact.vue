<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ friend.phone }}</li>
			<li><strong>Email:</strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'brad',
				name: 'Brad Grensewich',
				phone: '0702519921',
				email: 'brad@localhost.com',
			},
		};
	},
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>

<style></style>
