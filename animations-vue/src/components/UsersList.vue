<template>
	<TransitionGroup tag="ul" name="list">
		<li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
	</TransitionGroup>
	<div>
		<input type="text" v-model="enteredUser">
		<button @click="addUser">Add user</button>
	</div>
</template>
<script setup>
import { ref } from 'vue';

const users = ref(['Brad', 'Vy', 'Prickle', 'Hotdog']);
const enteredUser = ref(null)

function addUser() {
	users.value.unshift(enteredUser.value)
}
function removeUser(user) {
	users.value = users.value.filter(usr => usr !== user)
}
</script>
<style scoped>
ul {
	list-style: none;
	padding: 12px 0;
	margin: 0;
}
li {
	border: solid lightgrey 1px;
	text-align: center;
	padding: 12px;
}
.list-enter-from {
	opacity: 0;
	transform: translateX(-100%);
}
.list-enter-active {
	transition: all 500ms;
}
.list-enter-to {
	opacity: 1;
	transform: translateX(0);
}
.list-leave-from {
	opacity: 1;
	transform: translateX(0);
}
.list-leave-active {
	transition: all 500ms;
}
.list-leave-to {
	opacity: 0;
	transform: translateX(100%);
}
</style>
