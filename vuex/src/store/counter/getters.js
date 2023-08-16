export default {
	count(state) {
		return state.counter;
	},
	normalizedCounter(_, getters) {
		const count = getters.count;
		if (count < 0) {
			return 0;
		} else if (count > 100) {
			return 100;
		} else {
			return count;
		}
	},
};
