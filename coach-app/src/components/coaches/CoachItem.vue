<template>
	<li>
		<h3>{{ fullName }}</h3>
		<h4>$ {{ rate }}/hour</h4>
		<div>
			<BaseBadge
				v-for="area in areas"
				:key="area"
				:type="area"
				:title="area"
			></BaseBadge>
		</div>
		<div class="actions">
			<BaseButton mode="outline" link :to="coachContactLocation"
				>Contact</BaseButton
			>
			<BaseButton link :to="coachDetailsLocation">Details</BaseButton>
		</div>
	</li>
</template>

<script>
export default {
	props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
	computed: {
		fullName() {
			return this.firstName + ' ' + this.lastName;
		},
		coachContactLocation() {
			return { name: 'contact', params: { id: this.id } };
		},
		coachDetailsLocation() {
			return { name: 'coachDetails', params: { id: this.id } };
		},
	},
};
</script>

<style scoped>
li {
	margin: 1rem 0;
	border: 1px solid #424242;
	border-radius: 12px;
	padding: 1rem;
}

h3 {
	font-size: 1.5rem;
}

h3,
h4 {
	margin: 0.5rem 0;
}

div {
	margin: 0.5rem 0;
}

.actions {
	display: flex;
	justify-content: flex-end;
}
</style>
