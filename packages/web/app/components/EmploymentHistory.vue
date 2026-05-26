<script setup lang="ts">
const { employmentHistory } = storeToRefs(useCVStore())
</script>
<template>
    <Separator title="Employment"/>
    <div v-for="job in employmentHistory" class="bg-gray-100 rounded-lg mb-2 p-2 flex flex-col gap-1">
        <div class="flex justify-between items-center">
            <h4 class="font-bold uppercase text-sm">{{ job.company }}</h4>
            <span class="text-xs rounded-lg bg-gray-300 px-2">{{ job.startDate}} - {{ job.endDate}}</span>
        </div>
        <div class="flex justify-between items-center">
            <h4 class="font-bold text-sm">{{job.position}}</h4>
            <span class="text-xs rounded-lg bg-gray-300 px-2">{{job.location}}</span>
        </div>
        <ul class="list-disc list-inside">
            <li v-for="bulletPoint in job.responsibilities" class="text-xs">{{bulletPoint}}</li>
        </ul>
        <!-- <ul class="flex flex-row justify-evenly">
            <li v-for="skill in job.technologies" class="rounded-lg bg-gray-300 px-2 text-xs" >{{skill}}</li>
        </ul> -->
    </div>
</template>