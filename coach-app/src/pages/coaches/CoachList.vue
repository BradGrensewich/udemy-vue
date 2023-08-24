<template>
	<section>
		<CoachFilter @change-filters="setFilters"></CoachFilter>
	</section>
	<section>
		<BaseCard>
			<div class="controls">
				<BaseButton mode="outline">Refresh</BaseButton>
				<BaseButton v-if="!isCoach" link :to="{ name: 'register' }"
					>Register as Coach</BaseButton
				>
			</div>
			<ul v-if="hasCoaches">
				<CoachItem
					v-for="coach in getCoaches()"
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
		//doesn't work as expected due to vuex being a mess
		coaches() {
			return this.getCoaches();
		},
		hasCoaches() {
			return this.$store.getters.hasCoaches;
		},
		filteredCoaches() {
			console.log('filtering coaches');
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
		isCoach() {
			return this.$store.getters.isCoach;
		}
	},
	methods: {
		refreshCoaches() {
			console.log('refreshed TODO');
		},
		//this should be unneccessary and i should be able to use the computed property but there is
		//an issue with how vuex caches in the current version of vue that is messing this up
		//need to learn Pinia ASAP
		getCoaches() {
			return this.$store.getters.coaches;
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
