<script setup lang="ts">
const { skills, softSkills } = storeToRefs(useCVStore())
</script>
<template>
    <Separator title="Skills" />
    <div class="rounded-lg bg-gray-100 p-2">
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-sm">Fronted</h4>
            <ul class="text-xs flex flex-row gap-2 items-center" >
                <li v-for="skill in skills.frontend" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-sm">Backend</h4>
            <ul class="text-xs flex flex-row gap-2 items-center">
                <li v-for="skill in skills.backend" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-sm">Software Development</h4>
            <ul class="text-xs flex flex-row gap-2 items-center">
                <li v-for="skill in skills.softwareDevelopment" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-sm">Soft Skills</h4>
            <ul class="text-xs flex flex-row gap-2 items-center">
                <li v-for="skill in softSkills" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap">{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>
