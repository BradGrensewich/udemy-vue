<template>
	<section>
		<h2>{{ title }}</h2>
		<h3>${{ price }}</h3>
		<p>{{ description }}</p>
	</section>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const products = inject('products');

const selectedProduct = products.value.find(
	(product) => route.params.pid === product.id
);
const title = ref(selectedProduct.title);
const price = ref(selectedProduct.price);
const description = ref(selectedProduct.description);
</script>

<style scoped>
section {
	margin: 3rem auto;
	max-width: 40rem;
	padding: 1rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
