<script setup lang="ts">
const { courses } = storeToRefs(useCVStore());
</script>
<template>
    <h1>Courses</h1>
    <Separator />
    <div v-for="course in courses">
        <div class="flex justify-between items-align-center">
            <h3>{{ course.title }} at {{ course.institution}}</h3>
            <span>{{ course.startDate}} - {{ course.endDate}}</span>
        </div>
    </div>
</template>