<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="firstname">Firstname</label>
			<input type="text" id="firstname" v-model.lazy.trim="firstName" />
		</div>
		<div class="form-control">
			<label for="lastname">LastName</label>
			<input type="text" id="lastname" v-model.lazy.trim="lastName" />
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea
				id="description"
				rows="10"
				v-model.lazy.trim="description"
			></textarea>
		</div>
		<div class="form-control">
			<label for="rate">Hourly Rate</label>
			<input type="number" id="rate" v-model.lazy.number="rate" />
		</div>
		<div class="form-control">
			<h3>Areas of Expertise</h3>
			<div v-for="area in availableAreas">
				<input
					type="checkbox"
					:id="areaIDs[area]"
					:value="areaIDs[area]"
					v-model.lazy="areas"
				/>
				<label :for="areaIDs[area]">{{ area.toUpperCase() }}</label>
			</div>
		</div>
		<BaseButton>Register</BaseButton>
	</form>
</template>

<script>
export default {
    emits: ['save-data'],
	data() {
		return {
			availableAreas: ['frontend', 'backend', 'career', 'graphic design'],
			firstName: '',
			lastName: '',
			description: '',
			rate: null,
			areas: [],
		};
	},
	computed: {
		areaIDs() {
			const idMap = {};
			for (const area of this.availableAreas) {
				idMap[area] = area.split(' ').join('-');
			}
			return idMap;
		},
	},
	methods: {
		submitForm() {
			const formData = {
				first: this.firstName,
				last: this.lastName,
				desc: this.description,
				rate: this.rate,
				areas: this.areas,
			};
            this.$emit('save-data', formData)
		},
	},
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

</style>
