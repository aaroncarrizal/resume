<script setup lang="ts">
const { education } = storeToRefs(useCVStore())

</script>
<template>
    <Separator title="Education"/>
    <div v-for="school in education" class="rounded-lg bg-gray-100 p-2 flex flex-col gap-1">
        <div class="flex justify-between items-center">
            <h4 class="text-xs font-bold">{{ school.degree }}</h4>
            <span class="text-xs rounded-lg bg-gray-300 px-2">{{ school.startDate}} - {{ school.endDate}}</span>
        </div>
        <div class="flex justify-between items-center">
            <h4 class="text-xs">{{school.institution}}</h4>
            <span class="text-xs">{{school.location}}</span>
        </div>
    </div>
</template>