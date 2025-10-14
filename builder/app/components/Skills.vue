<script setup lang="ts">
const { skills, softSkills } = storeToRefs(useCVStore())
</script>
<template>
    <h1>Skills</h1>
    <Separator />
    <div class="grid grid-cols-4">
        <div>
            <h4>Fronted</h4>
            <ul>
                <li v-for="skill in skills.frontend">{{ skill }}</li>
            </ul>
        </div>
        <div>
            <h4>Backend</h4>
            <ul>
                <li v-for="skill in skills.backend">{{ skill }}</li>
            </ul>
        </div>
        <div>
            <h4>Software Development</h4>
            <ul>
                <li v-for="skill in skills.softwareDevelopment">{{ skill }}</li>
            </ul>
        </div>
        <div>
            <h4>Soft Skills</h4>
            <ul>
                <li v-for="skill in softSkills">{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>
