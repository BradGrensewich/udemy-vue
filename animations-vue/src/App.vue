<template>
	<div class="container">
		<div class="block" :class="{ animate: animatedBlock }"></div>
		<button @click="animateBlock">Animate</button>
	</div>
	<div class="container">
		<button @click="toggleParagraph">Toggle Paragraph</button>
		<Transition name="para">
			<p v-if="paraIsVisible">This is only sometimes visible</p>
		</Transition>
	</div>
	<div class="container">
		<Transition name="buttons" mode="out-in">
			<button v-if="!usersAreVisible" @click="showUsers">
				Show Users
			</button>
			<button v-else @click="hideUsers">Hide Users</button>
		</Transition>
	</div>
	<base-modal @close="hideDialog" :open="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>
	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const dialogIsVisible = ref(false);
const animatedBlock = ref(false);
const paraIsVisible = ref(false);
const usersAreVisible = ref(false);

function toggleParagraph() {
	paraIsVisible.value = !paraIsVisible.value;
}

function showDialog() {
	dialogIsVisible.value = true;
}
function hideDialog() {
	dialogIsVisible.value = false;
}
function animateBlock() {
	animatedBlock.value = true;
}
function showUsers() {
	usersAreVisible.value = true;
}
function hideUsers() {
	usersAreVisible.value = false;
}
</script>

<style>
* {
	box-sizing: border-box;
}
html {
	font-family: sans-serif;
}
body {
	margin: 0;
}
button {
	font: inherit;
	padding: 0.5rem 2rem;
	border: 1px solid #810032;
	border-radius: 30px;
	background-color: #810032;
	color: white;
	cursor: pointer;
}
button:hover,
button:active {
	background-color: #a80b48;
	border-color: #a80b48;
}
.block {
	width: 8rem;
	height: 8rem;
	background-color: #290033;
	margin-bottom: 2rem;
	/* transition: transform 600ms; */
}
.container {
	max-width: 40rem;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	border: 2px solid #ccc;
	border-radius: 12px;
}

.para-enter-from {
	transform: translateX(-300px) scale(50%);
}
.para-enter-active {
	transition: transform 500ms;
}
.para-enter-to {
	transform: translateX(0px) scale(100%);
}
.para-leave-from {
	transform: translateX(0px) scale(100%);
}
.para-leave-active {
	transition: transform 500ms;
}
.para-leave-to {
	transform: translateX(300px) scale(50%);
}

.buttons-enter-from,
.buttons-leave-to {
  opacity: 0;
  transform: scale(30%);
}
.buttons-enter-active {
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}
.buttons-leave-active {
  transition: opacity 300ms ease-in, transform 300ms ease-in;
}

.buttons-enter-to,
.buttons-leave-from {
  opacity: 1;
  transform: scale(100%);
}
.animate {
	/* transform: translateX(-150px); */
	animation: slide-fade 500ms ease-out both;
}

@keyframes slide-fade {
	0% {
		transform: translateX(0) scale(1);
	}
	70% {
		transform: translateX(-120px) scale(1.1);
	}
	100% {
		transform: translateX(-150px) scale(1);
	}
}
</style>
