<script setup lang="ts">
const { personalInfo } = storeToRefs(useCVStore())


const parsedLinkedin = computed(() => {
    return (
        personalInfo.value.linkedIn?.replace(/^https?:\/\/(www\.)?/, '') || ''
    )
})
const parsedGithub = computed(() => {
    return (
        personalInfo.value.github?.replace(/^https?:\/\/(www\.)?/, '') || ''
    )
})
</script>
<template>
    <div class="flex flex-col align-items-center gap-1 pt-2">
        <h1 class="uppercase text-center text-xl">
            {{ personalInfo.fullName }}
        </h1>
        <h2 class="text-center text-lg">{{ personalInfo.title }}</h2>
        <ul class="flex flex-row justify-center gap-x-4 text-xs">
            <li class="rounded-lg bg-gray-200 px-2">
                <a :href="`mailto:` + personalInfo.email">{{
                    personalInfo.email
                }}</a>
            </li>
            <li class="rounded-lg bg-gray-200 px-2">
                <a :href="personalInfo.linkedIn">{{ parsedLinkedin }}</a>
            </li>
            <!-- <li class="rounded-lg bg-gray-200 px-2">
                <a :href="personalInfo.github">{{ parsedGithub }}</a>
            </li> -->
            <li class="rounded-lg bg-gray-200 px-2">
                {{ personalInfo.phone }}
            </li>
            <li class="rounded-lg bg-gray-200 px-2">
                {{ personalInfo.location }}
            </li>
        </ul>
        <div>
            <p class="text-xs text-justify rounded-lg bg-gray-100 p-2">
                {{ personalInfo.profile }}
            </p>
        </div>
    </div>
</template>
