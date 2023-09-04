<template>
	<BaseDialog :show="!!error" title="An error occured." @close="handleError">
		<p>{{ error }}</p>
	</BaseDialog>
	<section>
		<div v-if="isLoading">
			<BaseSpinner></BaseSpinner>
		</div>
		<BaseCard v-else>
			<h2>Register as a coach now!</h2>
			<CoachForm @save-data="saveData"></CoachForm>
		</BaseCard>
	</section>
</template>

<script>
import CoachForm from './CoachForm.vue';

export default {
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
	components: { CoachForm },
	methods: {
		async registerCoach(data) {
			this.isLoading = true;
			try {
				await this.$store.dispatch('registerCoach', data);
			} catch (e) {
				this.error = e.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		async saveData(data) {
			await this.registerCoach(data);
			if (!this.error) {
				this.$router.replace('/coaches');
			}
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>
