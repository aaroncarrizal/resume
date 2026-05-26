<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'title'
    }
})
</script>

<template>
    <div class="mt-1">
        <h3>{{ title }}</h3>
        <div class="w-100 h-1 bg-black mb-1 rounded-lg"></div>
    </div>
</template>
