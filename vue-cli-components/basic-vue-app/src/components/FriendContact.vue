<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ phoneNumber }}</li>
			<li><strong>Email:</strong>{{ email }}</li>
		</ul>
		<button @click="deleteFriend">Delete</button>
	</li>
</template>

<script>
export default {
	//props: ['name', 'phoneNumber', 'email', 'isFavorite'],
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	//emits: ['toggle-favorite'],
	emits: {
		'toggle-favorite': function (id) {
			if (id) {
				return true;
			} else {
				return false;
			}
		},
		'deleteFriend': function(id) {
			if (id) {
				return true;
			} else {
				return false;
			}
		}
	},
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.id);
		},
		deleteFriend() {
			this.$emit('delete-friend', this.id)
		}
	},
};
</script>

<style></style>
