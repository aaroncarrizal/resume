<script setup lang="ts">
const { employmentHistory } = storeToRefs(useCVStore())
</script>
<template>
    <h1>Employment</h1>
    <Separator/>
    <div v-for="job in employmentHistory">
        <div class="flex justify-between items-align-center">
            <h3>{{ job.company }}</h3>
            <span>{{ job.startDate}} - {{ job.endDate}}</span>
        </div>
        <div class="flex justify-between items-align-center">
            <h3>{{job.position}}</h3>
            <span>{{job.location}}</span>
        </div>
        <ul>
            <li v-for="bulletPoint in job.responsibilities">{{bulletPoint}}</li>
        </ul>
        <ul class="flex flex-row justify-evenly">
            <li v-for="skill in job.technologies">{{skill}}</li>
        </ul>
    </div>
</template>