<template>
	<main>
		<TheHeader :name="taskStore.name"></TheHeader>
    <TaskList></TaskList>
	</main>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TaskList from './components/tasks/TaskList.vue';
import { useTaskStore } from './stores/TaskStore.js';

export default {
	components: { TheHeader, TaskList },
  data() {
    return {
      taskStore: useTaskStore()
    }

  }
};
</script>
