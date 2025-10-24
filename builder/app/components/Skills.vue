<script setup lang="ts">
const { skills, softSkills } = storeToRefs(useCVStore())
</script>
<template>
    <Separator title="Skills" />
    <div class="rounded-lg bg-gray-100 p-2 flex flex-col gap-1">
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-xs">Fronted</h4>
            <ul class="text-xs flex flex-row gap-2 items-center flex-wrap" >
                <li v-for="skill in skills.frontend" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap text-xs">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-xs">Backend</h4>
            <ul class="text-xs flex flex-row gap-2 items-center flex-wrap">
                <li v-for="skill in skills.backend" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap text-xs">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-xs">Software Development</h4>
            <ul class="text-xs flex flex-row gap-2 items-center flex-wrap">
                <li v-for="skill in skills.softwareDevelopment" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap text-xs">{{ skill }}</li>
            </ul>
        </div>
        <div class="flex flex-row items-center justify gap-4">
            <h4 class="text-xs">Soft Skills</h4>
            <ul class="text-xs flex flex-row gap-2 items-center flex-wrap">
                <li v-for="skill in softSkills" class="rounded-lg bg-gray-300 px-2 whitespace-nowrap text-xs">{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>
