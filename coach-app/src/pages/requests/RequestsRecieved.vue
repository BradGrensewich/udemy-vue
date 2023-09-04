<template>
	<BaseDialog :show="!!error" title="An error occured." @close="handleError">
		<p>{{ error }}</p>
	</BaseDialog>
	<section>
		<BaseCard>
			<header>
				<h2>Requests recieved</h2>
				<ul>
					<RequestItem
						v-for="request in receivedRequests"
						:key="request.id"
						:email="request.userEmail"
						:message="request.message"
					></RequestItem>
				</ul>
				<h3 v-if="!hasRequests">
					You haven't recieved any requests yet
				</h3>
			</header>
		</BaseCard>
	</section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
	data() {
		return {
			error: null,
			isLoading: false,
		};
	},
	computed: {
		receivedRequests() {
			return this.$store.getters.requests;
		},
		hasRequests() {
			return this.$store.getters.hasRequests;
		},
	},
	methods: {
		async loadRequests() {
			this.isLoading = true;
			try {
				await this.$store.dispatch('loadRequests');
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
	created() {
		this.loadRequests();
	},
	components: { RequestItem },
};
</script>

<style scoped>
header {
	text-align: center;
}

ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 30rem;
}

h3 {
	text-align: center;
}
</style>
