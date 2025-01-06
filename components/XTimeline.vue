<template>
  <a class="twitter-timeline" data-lang="fr" data-theme="dark" href="https://twitter.com/AmineMaTue?ref_src=twsrc%5Etfw">Tweets by AmineMaTue</a>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

// Import Twitter widget script
useScriptTag('https://platform.twitter.com/widgets.js')
</script>

<style lang="scss">
.twitter-timeline {
  min-width: 300px;
  width: 100%;
  max-width: 600px !important;
}
</style>
