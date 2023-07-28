<template>
	<BaseCard>
		<form @submit.prevent="saveResource">
			<div class="form-control">
				<label for="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					v-model="enteredTitle"
				/>
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="3"
					v-model="enteredDescription"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input type="url" id="link" name="link" v-model="enteredLink" />
			</div>
			<div>
				<BaseButton type="submit">Add Resource</BaseButton>
			</div>
		</form>
	</BaseCard>
</template>

<script>
export default {
	data() {
		return {
			enteredTitle: '',
			enteredDescription: '',
			enteredLink: '',
		};
	},
	methods: {
		saveResource() {
            this.$emit('save-resource', this.enteredTitle, this.enteredDescription, this.enteredLink)
        },
	},
};
</script>

<style scoped>
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 1px solid #ccc;
}

input:focus,
textarea:focus {
	outline: none;
	border-color: #3a0061;
	background-color: #f7ebff;
}

.form-control {
	margin: 1rem 0;
}
</style>
