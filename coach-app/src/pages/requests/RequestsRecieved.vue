<template>
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
	computed: {
		receivedRequests() {
			return this.$store.getters.requests;
		},
		hasRequests() {
			return this.$store.getters.hasRequests;
		},
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
