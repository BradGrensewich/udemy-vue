<template>
  <RouterView v-slot="{ Component}">
    <Transition name="buttons" mode="out-in">
      <component :is="Component"/>
    </Transition>    
  </RouterView>
</template>

<script setup>
import UsersList from './components/UsersList.vue'
import { ref } from 'vue';

const dialogIsVisible = ref(false);
const animatedBlock = ref(false);
const paraIsVisible = ref(false);
const usersAreVisible = ref(false);
const enterInterval = ref(null)
const leaveInterval = ref(null)

function toggleParagraph() {
	paraIsVisible.value = !paraIsVisible.value;
}
function beforeEnter(el) {
  el.style.opacity = 0
}
function enter(el, done) {
  let round = 1;
  enterInterval.value = setInterval(() => {
    el.style.opacity = round * 0.01;
    round++
    if (round > 100) {
      clearInterval(enterInterval.value)
      done()
    }
  }, 20)
}
function afterEnter() {
  console.log('animation complete')
}
function beforeLeave(el) {
  el.style.opacity = 1
}
function leave(el, done) {
  let round = 100;
  leaveInterval.value = setInterval(() => {
    el.style.opacity = round * 0.01;
    round--
    if (round < 0) {
      clearInterval(leaveInterval.value)
      done()
    }
  }, 20)
}
function afterLeave() {
  console.log('animation complete')
}
function enterCancelled() {
  clearInterval(enterInterval.value)
}
function leaveCancelled() {
  clearInterval(leaveInterval.value)
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
