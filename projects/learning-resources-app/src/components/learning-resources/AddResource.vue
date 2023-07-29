<template>
	<BaseDialog v-if="isInvalid" title="Invalid Input" @closeDialog="confirmError">
		<template #default>
			<p>
				Unfortunately, at least one input field is invalid. Please check
				all inputs and make sure you enter some information into each input field.
			</p>
		</template>
		<template #actions>
			<BaseButton @click="confirmError"> Okay </BaseButton>
		</template>
	</BaseDialog>
	<BaseCard>
		<form @submit.prevent="saveResource">
			<div class="form-control">
				<label for="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					v-model.lazy="enteredTitle"
				/>
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="3"
					v-model.lazy="enteredDescription"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input
					type="url"
					id="link"
					name="link"
					v-model.lazy="enteredLink"
				/>
			</div>
			<div>
				<BaseButton type="submit">Add Resource</BaseButton>
			</div>
		</form>
	</BaseCard>
</template>

<script>
export default {
	inject: ['addResource'],
	data() {
		return {
			enteredTitle: '',
			enteredDescription: '',
			enteredLink: '',
			isInvalid: false,
		};
	},
	methods: {
		saveResource() {
			if (
				!this.enteredTitle.trim() ||
				!this.enteredDescription.trim() ||
				!this.enteredLink.trim()
			) {
				this.isInvalid = true;
				return;
			}
			this.addResource(
				this.enteredTitle,
				this.enteredDescription,
				this.enteredLink
			);
		},
        confirmError() {
            this.isInvalid = false
        }
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
