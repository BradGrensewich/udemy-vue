<template>
	<section>
		<CoachFilter @change-filters="setFilters"></CoachFilter>
	</section>
	<section>
		<BaseCard>
			<div class="controls">
				<BaseButton mode="outline">Refresh</BaseButton>
				<BaseButton link :to="{ name: 'register' }"
					>Register as Coach</BaseButton
				>
			</div>
			<ul v-if="hasCoaches">
				<CoachItem
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="coach.areas"
				></CoachItem>
			</ul>
			<h3 v-else>No coaches found</h3></BaseCard
		>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from './CoachFilter.vue';

export default {
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
				graphicDesign: true,
			},
		};
	},
	computed: {
		...mapGetters(['coaches', 'hasCoaches']),
		filteredCoaches() {
			return this.coaches.filter((coach) => {
				for (const area in this.activeFilters) {
					if (
						this.activeFilters[area] &&
						coach.areas.includes(area)
					) {
						return true;
					}
				}
				return false;
			});
		},
	},
	methods: {
		refreshCoaches() {
			console.log('refreshed TODO');
		},
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
	},
	components: { CoachItem, CoachFilter },
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
