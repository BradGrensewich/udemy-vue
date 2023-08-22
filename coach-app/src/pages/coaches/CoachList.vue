<template>
	<section>FILTER</section>
	<section>
		<div class="controls">
			<button>Refresh</button>
			<RouterLink :to="{ name: 'register' }">Register as Coach</RouterLink>
		</div>
		<ul v-if="hasCoaches">
			<li v-for="coach in coaches" :key="coach.id">
				<RouterLink  :to=" {name: 'coach', params: { id: coach.id}}">{{ coach.firstName }}</RouterLink>
			</li>			
		</ul>
		<h3 v-else>No coaches found</h3>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {	
	computed: {
		...mapGetters(['coaches', 'hasCoaches'])
		
	}
};
</script>
