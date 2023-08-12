<template>
	<div>
		<h3>{{ task.title }}</h3>
		<div class="icons">
			<i class="material-icons">delete</i>
			<i class="material-icons">favorite</i>
		</div>
	</div>
</template>

<script>
export default {
	props: ['task'],
};
</script>

<style scoped>
div {
	padding: 6px 20px;
	background: #fff;
	margin-top: 20px;
	border-radius: 4px;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: center;
}
h3, .icons {
  display: inline-block;
}

.icon {
    text-align: right;
}

i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}
</style>
