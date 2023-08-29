<template>
	<section>
		<CoachFilter @change-filters="setFilters"></CoachFilter>
	</section>
	<section>
		<BaseCard>
			<div class="controls">
				<BaseButton mode="outline" @click="loadCoaches"
					>Refresh</BaseButton
				>
				<BaseButton v-if="!isCoach && !isLoading" link :to="{ name: 'register' }"
					>Register as Coach</BaseButton
				>
			</div>
			<div v-if="isLoading">
				<BaseSpinner></BaseSpinner>
			</div>
			<ul v-else-if="hasCoaches">
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
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from './CoachFilter.vue';


export default {
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
				graphicdesign: true,
			},
			isLoading: false,
		};
	},
	computed: {
		//doesn't work as expected due to vuex being a mess
		coaches() {
			return this.$store.getters.coaches;
		},
		hasCoaches() {
			return !this.isLoading && this.$store.getters.hasCoaches;
		},
		filteredCoaches() {
			return this.coaches.filter((coach) => {
				for (const area in this.activeFilters) {
					if (
						this.activeFilters[area] &&
						coach.areas.some(
							(coachArea) => coachArea.replace(/-/g, '') === area
						)
					) {
						return true;
					}
				}
				return false;
			});
		},
		isCoach() {
			return this.$store.getters.isCoach;
		},
	},
	methods: {
		async loadCoaches() {
			this.isLoading = true
			await this.$store.dispatch('loadCoaches');
			this.isLoading = false
		},

		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
	},
	created() {
		this.loadCoaches();
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
