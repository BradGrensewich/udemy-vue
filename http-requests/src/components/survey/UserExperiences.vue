<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>
			<div>
				<base-button @click="loadSubmittedExperiences"
					>Load Submitted Experiences</base-button
				>
			</div>
			<ul>
				<survey-result
					v-for="result in results"
					:key="result.id"
					:name="result.name"
					:rating="result.rating"
				></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
	data() {
		return {
			results: [],
		};
	},
	components: {
		SurveyResult,
	},
	methods: {
		loadSubmittedExperiences() {
			fetch(
				'https://vue-http-demo-4567d-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
			)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => {
					const results = [];
					for (const id in data) {
						results.push({
							id: id,
							name: data[id].name,
							rating: data[id].rating,
						});
					}
					this.results = results;
				});
		},
	},
	created() {
		this.loadSubmittedExperiences();
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
