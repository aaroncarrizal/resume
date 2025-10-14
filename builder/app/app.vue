<script setup>
useHead({
    title: 'Aarón Mishael Carrizal Méndez - Web Developer',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet'
        }
    ],
    style: [
        {
            children: `
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
      }
    `
        }
    ]
})
</script>

<template>
    <NuxtPage />
</template>
<style lang="css">
h1,
h2,
h3 {
    font-family: 'Anton';
}
* {
    font-family: 'Roboto';
}
</style>
