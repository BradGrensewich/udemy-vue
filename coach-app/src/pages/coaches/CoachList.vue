<template>
	<section>FILTER</section>
	<section>
		<div class="controls">
			<button>Refresh</button>
			<RouterLink :to="{ name: 'register' }">Register as Coach</RouterLink>
		</div>
		<ul>
			<li v-for="coach in coaches">
				<RouterLink  :to=" {name: 'coach', params: { id: coach.id}}">{{ coach.name }}</RouterLink>
			</li>
			
		</ul>
	</section>
</template>

<script>

export default {	
	data() {
		return {
			coaches: [
				{
					id: 1,
					name: 'Dummy',
					phone: '911',
					email: 'fake@fake',
					expertise: ['java', 'python'],
				},
				{
					id: 2,
					name: 'Dummy2',
					phone: '11111',
					email: 'fakefake@fake',
					expertise: ['c', 'vue', 'firebase'],
				},
			],
		};
	},
};
</script>
