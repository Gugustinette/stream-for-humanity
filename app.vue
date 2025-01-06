<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Favicon
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/stream-for-humanity/favicon.ico' },
  ],
})
// SEO
useSeoMeta({
  title: 'Stream For Humanity',
  description: 'Stream For Humanity',
  url: 'https://gugustinette.github.io/stream-for-humanity/',
})
</script>

<style>
:root {
  --color-primary: #FB227D;
  --color-secondary: #FC8C74;
  --color-red: #E62D25;
  --color-background: #0A0502;
  --color-font: #FEFFFF;
}

body {
  font-family: Rubik, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--color-background);
  color: var(--color-font);
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
