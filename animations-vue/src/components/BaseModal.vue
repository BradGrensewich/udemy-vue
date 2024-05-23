<template>
	<div class="backdrop" @click="$emit('close')" v-if="open"></div>
	<Transition name="modal">
		<dialog open v-if="open">
			<slot></slot>
		</dialog>
	</Transition>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps(['open'])
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.75);
}

dialog {
	position: fixed;
	top: 30vh;
	width: 30rem;
	left: calc(50% - 15rem);
	margin: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 12px;
	padding: 1rem;
	background-color: white;
	z-index: 100;
	border: none;
}

@keyframes pop-up {
	0% {
		transform: translateY(-100px) scale(10%);
	}
	100% {
		transform: translateY(0px) scale(100%);
	}
}

.modal-enter-active {
	animation: pop-up 400ms;
}
.modal-leave-active {
  animation: pop-up 200ms reverse;
}

</style>
