<template>
	<ul>
		<CoachDetails v-for="coach in coaches" :id="coach.id" :coach="coach"></CoachDetails>
	</ul>
</template>

<script>
import CoachDetails from './CoachDetails.vue';
export default {
	components: { CoachDetails },
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
