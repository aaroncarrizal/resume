<script setup lang="ts">
const { languages } = storeToRefs(useCVStore());
</script>
<template>
    <h1>Languages</h1>
    <Separator />
    <div v-for="language in languages">
        <div class="flex justify-between items-align-center">
            <span>{{ language.name }}</span>
            <span>{{ language.name}}</span>
        </div>
    </div>
</template>