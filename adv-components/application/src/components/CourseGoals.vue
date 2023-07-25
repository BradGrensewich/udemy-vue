<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-item="This is just to demo accessing scoped slots kebab-case"></slot>    
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Learn Vue', 'Finish the course']
        }
    }
}
</script>
