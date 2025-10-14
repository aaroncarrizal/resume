<script setup lang="ts">
const { languages } = storeToRefs(useCVStore());
</script>
<template>
    <Separator  title="Languages"/>
    <div class="rounded-lg bg-gray-100 p-2" >
        <div v-for="language in languages" class="flex justify-between items-align-center">
            <span class="text-xs">{{ language.name }}</span>
            <span class="text-xs">{{ language.level}}</span>
        </div>
    </div>
</template>