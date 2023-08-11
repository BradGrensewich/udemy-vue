import { defineStore } from 'pinia';

const useTaskStore = defineStore('taskStore', {
	state: () => {
		return {
			tasks: [
				{ id: 1, title: 'Say that Vy is beautiful', isFav: false },
				{ id: 2, title: 'Watch Oppenheimmer', isFav: false },
			],
		};
	},
});

export default useTaskStore;
