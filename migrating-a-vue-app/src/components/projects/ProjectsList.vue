<template>
	<base-container v-if="user">
		<h2>{{ user.fullName }}: Projects</h2>
		<base-search
			v-if="hasProjects"
			@search="updateSearch"
			:search-term="enteredSearchTerm"></base-search>
		<ul v-if="hasFilteredProjects">
			<project-item
				v-for="prj in availableProjects"
				:key="prj.id"
				:title="prj.title"></project-item>
		</ul>
		<h3 v-else>No projects found.</h3>
	</base-container>
	<base-container v-else>
		<h3>No user selected.</h3>
	</base-container>
</template>

<script setup>
import { computed, ref, toRefs, watch } from 'vue';
import ProjectItem from './ProjectItem.vue';

const props = defineProps(['user']);

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

function updateSearch(val) {
	enteredSearchTerm.value = val;
}

watch(enteredSearchTerm, (val) => {
	setTimeout(() => {
		if (val === enteredSearchTerm.value) {
			activeSearchTerm.value = val;
		}
	}, 300);
});

const { user } = toRefs(props);

watch(user, () => {
	enteredSearchTerm.value = '';
});

const availableProjects = computed(() => {
	if (activeSearchTerm.value) {
		return props.user.projects.filter((prj) =>
			prj.title.includes(activeSearchTerm.value)
		);
	}
	return props.user.projects;
});

const hasProjects = computed(() => {
	return props.user.projects;
});

const hasFilteredProjects = computed(() => {
	return props.user.projects && availableProjects.value.length > 0;
});

// export default {
//   components: {
//     ProjectItem,
//   },
//   props: ['user'],
//   data() {
//     return {
//       enteredSearchTerm: '',
//       activeSearchTerm: '',
//     };
//   },
//   computed: {
//     hasProjects() {
//       return this.user.projects && this.availableProjects.length > 0;
//     },
//     availableProjects() {
//       if (this.activeSearchTerm) {
//         return this.user.projects.filter((prj) =>
//           prj.title.includes(this.activeSearchTerm)
//         );
//       }
//       return this.user.projects;
//     },
//   },
//   methods: {
//     updateSearch(val) {
//       this.enteredSearchTerm = val;
//     },
//   },
//   watch: {
//     enteredSearchTerm(val) {
//       setTimeout(() => {
//         if (val === this.enteredSearchTerm) {
//           this.activeSearchTerm = val;
//         }
//       }, 300);
//     },
//     user() {
//       this.enteredSearchTerm = '';
//     },
//   },
// };
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
