<template>
  <main>
    <HeroSection />
    <article>
      <h2>À propos</h2>
      <p>Stream For Humanity est une initiative de streamers francophones mené par <NuxtLink to="https://x.com/AmineMaTue">AmineMaTue</NuxtLink> pour soutenir les populations de la Palestine, du Congo, du Soudan et du Liban.</p>
      <p>Il s'agit d'une levée de fond en faveur de <NuxtLink to="https://www.msf.fr/">Médecins Sans Frontières</NuxtLink> en direct sur Twitch, qui commence le Vendredi 17 Janvier et se termine le Dimanche 19 Janvier.</p>
    </article>
    <XTimeline />
  </main>
</template>

<style lang="scss">
main {
  row-gap: 8rem;

  p {
    max-width: 800px;
  }
}
</style>
