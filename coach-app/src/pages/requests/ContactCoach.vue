<template>
	<BaseDialog :show="!!error" title="An error occured." @close="handleError">
		<p>{{ error }}</p>
	</BaseDialog>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="email">Email</label>
			<input type="email" id="email" v-model.lazy.trim="email" />
		</div>
		<div class="form-control">
			<label for="message">Message</label>
			<textarea
				id="message"
				rows="5"
				v-model.lazy.trim="message"
			></textarea>
		</div>
		<p v-if="!formIsValid" class="errors">
			Please enter a valid email and non-empty message
		</p>
		<div class="actions">
			<BaseButton>Send Message</BaseButton>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			message: '',
			formIsValid: true,
			error: null,
			isLoading: false,
		};
	},
	methods: {
		async contactCoach(data) {
			this.isLoading = true;
			try {
				this.$store.dispatch('contactCoach', data);
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		submitForm() {
			this.validateForm();
			if (!this.formIsValid) {
				return;
			}
			this.contactCoach({
				coachId: this.$route.params.id,
				email: this.email,
				message: this.message,
			});
			this.$router.replace('/');
		},
		validateForm() {
			this.formIsValid = true;
			if (
				this.email === '' ||
				!this.email.includes('@') ||
				this.message === ''
			) {
				this.formIsValid = false;
			}
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>

<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 1rem;
}

.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	border: 1px solid #ccc;
	padding: 0.15rem;
}

input:focus,
textarea:focus {
	border-color: #3d008d;
	background-color: #faf6ff;
	outline: none;
}

.errors {
	font-weight: bold;
	color: red;
}

.actions {
	text-align: center;
}
</style>
