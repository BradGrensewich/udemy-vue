<template>
	<ul>
		<TaskDetails
			v-for="task in taskStore.tasks"
			:key="task.id"
			:task="task"
		>
		</TaskDetails>
	</ul>
</template>

<script>
import TaskDetails from './TaskDetails.vue';
import { useTaskStore } from '../../stores/TaskStore';

export default {
	components: { TaskDetails },
	data() {
		return {
			taskStore: useTaskStore(),
		};
	},
};
</script>

<style scoped>
ul {
	max-width: 640px;
	margin: 20px auto;
}
</style>
