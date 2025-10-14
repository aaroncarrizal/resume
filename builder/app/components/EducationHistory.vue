<script setup lang="ts">
const { education } = storeToRefs(useCVStore())

</script>
<template>
    <h1>Education</h1>
    <Separator/>
    <div v-for="school in education ">
        <div class="flex justify-between items-align-center">
            <h3>{{ school.degree }}</h3>
            <span>{{ school.startDate}} - {{ school.endDate}}</span>
        </div>
        <div class="flex justify-between items-align-center">
            <h3>{{school.institution}}</h3>
            <span>{{school.location}}</span>
        </div>
    </div>
</template>