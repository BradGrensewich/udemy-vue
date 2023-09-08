<template>
	<BaseDialog :show="!!error" title="An error occured." @close="handleError">
		<p>{{ error }}</p>
	</BaseDialog>
	<section>
		<CoachFilter @change-filters="setFilters"></CoachFilter>
	</section>
	<section>
		<BaseCard>
			<div class="controls">
				<BaseButton mode="outline" @click="loadCoaches(true)"
					>Refresh</BaseButton
				>
				<BaseButton
					link
					:to="{ name: 'auth', query: { redirect: 'register' } }"
					v-if="!isLoggedIn"
					>Login to Register as Coach</BaseButton
				>
				<BaseButton
					v-if="registerAvailable"
					link
					:to="{ name: 'register' }"
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
			error: null,
		};
	},
	computed: {
		isLoggedIn() {
			return this.$store.getters.isAuthenticated;
		},
		hasCoaches() {
			return !this.isLoading && this.$store.getters.hasCoaches;
		},
		filteredCoaches() {
			const coaches = this.$store.getters.coaches;
			return coaches.filter((coach) => {
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
		registerAvailable() {
			return this.isLoggedIn && !this.isCoach && !this.isLoading;
		},
	},
	methods: {
		async loadCoaches(refresh = false) {
			this.isLoading = true;
			try {
				await this.$store.dispatch('loadCoaches', {
					forceRefresh: refresh,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}

			this.isLoading = false;
		},

		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
		handleError() {
			this.error = null;
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
