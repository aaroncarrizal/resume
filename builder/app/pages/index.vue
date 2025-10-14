<script setup lang="ts">
import { useCVStore } from '~/stores/cv'

const cvStore = useCVStore()

onMounted(() => {
    cvStore.loadCV()
})
</script>
<template>
    <div class="container mx-auto px-4">
        <PersonalInfo />
        <EmploymentHistory />
        <EducationHistory />
        <Skills />
        <Courses />
        <Languages />
    </div>
</template>
