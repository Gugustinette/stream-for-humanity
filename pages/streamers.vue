<template>
  <main>
      <div class="streamer-selector">
          <div
              class="streamer-button"
              v-for="streamer in streamerList"
              :key="streamer.username"
              @click="changeStreamer(streamer.username)"
          >
              {{ streamer.displayName }}
          </div>
      </div>
      <iframe
          :src="`https://player.twitch.tv/?channel=${actualStreamer}&parent=localhost`"
          parent="localhost"
          height="720"
          width="1280"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
      />
  </main>
</template>

<script setup lang="ts">
const actualStreamer = ref('aminematue')

// Rewrite streamer list as objects with beautified names { username: 'streamer', displayName: 'Streamer' }
const streamerList = [
  { username: 'aminematue', displayName: 'AmineMaTue' },
  { username: 'arkunir', displayName: 'Arkunir' },
  { username: 'avamind', displayName: 'Ava Mind' },
  { username: 'bagherajones', displayName: 'Baghera' },
  { username: 'rebeudeter', displayName: 'Billy' },
  { username: 'doigby', displayName: 'Doigby' },
  { username: 'etoiles', displayName: 'Etoiles' },
  { username: 'gotaga', displayName: 'Gotaga' },
  { username: 'grimkujow', displayName: 'Grimkujow' },
  { username: 'inoxtag', displayName: 'Inoxtag' },
  { username: 'bmsjoel', displayName: 'Joel' },
  { username: 'kamet0', displayName: 'Kameto' },
  { username: 'kennystream', displayName: 'KennyStream' },
  { username: 'locklear', displayName: 'Locklear' },
  { username: 'lolypokicake', displayName: 'Loly' },
  { username: 'maghla', displayName: 'Maghla' },
  { username: 'michou', displayName: 'Michou' },
  { username: 'minos', displayName: 'Minos' },
  { username: 'pauleta_twitch', displayName: 'Pfut' },
  { username: 'squeezie', displayName: 'Squeezie' },
  { username: 'tatiana_tv', displayName: 'Tatiana' },
  { username: 'terracid', displayName: 'Terracid' },
  { username: 'xo_trixy', displayName: 'Trixy' },
  // { username: '?', displayName: 'Yannou' },
  { username: 'zacknani', displayName: 'Zack Nani' },
  { username: 'zwave', displayName: 'Zwave' },
]

const changeStreamer = (streamer: string) => {
  actualStreamer.value = streamer
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 50px);

  .streamer-selector {
      display: flex;
      flex-direction: column;
      height: 100%;
      row-gap: 10px;
      padding: 0 10px;
      overflow-y: auto;

      .streamer-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          min-height: 50px;
          cursor: pointer;

          &:hover {
              color: var(--color-primary);
          }
      }

      /* Hide Scrollbar */
      ::-webkit-scrollbar {
          display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
  }

  iframe {
      width: 100%;
      height: 100%;
  }
}
</style>
