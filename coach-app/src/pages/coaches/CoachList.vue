<template>
	<section>FILTER</section>
	<section>
		<div class="controls">
			<button>Refresh</button>
			<RouterLink :to="{ name: 'register' }"
				>Register as Coach</RouterLink
			>
		</div>
		<ul v-if="hasCoaches">
			<CoachItem
				v-for="coach in coaches"
				:key="coach.id"
				:id="coach.id"
				:first-name="coach.firstName"
				:last-name="coach.lastName"
				:rate="coach.hourlyRate"
				:areas="coach.areas"
			></CoachItem>
		</ul>
		<h3 v-else>No coaches found</h3>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
	computed: {
		...mapGetters(['coaches', 'hasCoaches']),
	},
	methods: {
		refreshCoaches() {
			console.log('refreshed TODO');
		},
	},
	components: { CoachItem },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
