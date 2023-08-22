<template>
    <TheHeader></TheHeader>
    <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
export default {
    components: { TheHeader, RouterView }

}
</script>