<script setup lang="ts">

const { personalInfo } = storeToRefs(useCVStore())

</script>
<template>

    <div class="flex flex-col justify-center items-center">
        <h1>{{ personalInfo.fullName}}</h1>
        <h2>{{personalInfo.title}}</h2>
        <ul class="flex flex-row justify-center gap-x-4">
            <li><a href="emailto:{{personalInfo.email}}">{{personalInfo.email}}</a></li>
            <li>{{ personalInfo.phone }}</li>
            <li><a :href="personalInfo.linkedIn">{{personalInfo.fullName}}</a></li>
            <li>{{personalInfo.location}}</li>
        </ul>
        <div>
            <p>
                {{ personalInfo.profile }}
            </p>
        </div>
    </div>
</template>
