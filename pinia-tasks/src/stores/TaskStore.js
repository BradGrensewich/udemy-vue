import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
	state: () => {
		return {
			tasks: [
				{ id: 1, title: 'Say that Vy is beautiful', isFav: false },
				{ id: 2, title: 'Watch Oppenheimmer', isFav: false },
			],
			name: 'Brad'
		};
	},
});


