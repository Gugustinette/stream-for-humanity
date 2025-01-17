<template>
  <main>
    <div class="streamer-selector" v-if="streamerList && streamerList.length > 0">
      <div
        class="streamer-button"
        v-for="streamer in streamerList"
        :key="streamer.login"
        @click="changeStreamer(streamer.login)"
      >
        <div class="streamer-profile">
          <NuxtImg class="streamer-picture" :src="streamer.profile_image_url" :alt="streamer.display_name" />
          <div class="streamer-info">
            <p class="streamer-display-name">{{ streamer.display_name }}</p>
            <p class="streamer-game-name">{{ streamer.game_name }}</p>
          </div>
        </div>
        <div class="streamer-status" v-if="streamer.is_live">
          <span class="live-circle"></span>
          <span>{{ streamer.viewers }}</span>
        </div>
      </div>
    </div>
    <iframe
      :src="`https://player.twitch.tv/?channel=${actualStreamer}&parent=gugustinette.github.io`"
      parent="gugustinette.github.io"
      height="720"
      width="1280"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    />
  </main>
</template>

<script setup lang="ts">
const streamerList = await useStreamers()
const actualStreamer = ref('aminematue')

const changeStreamer = (streamer: string) => {
  actualStreamer.value = streamer
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 100px);

  .streamer-selector {
    display: flex;
    flex-direction: column;
    height: 100%;
    row-gap: 10px;
    padding: 0 10px;
    overflow-y: auto;
    min-width: 200px;

    .streamer-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 20px;
      width: 100%;
      height: 50px;
      min-height: 50px;
      cursor: pointer;
      font-size: 14px;

      .streamer-profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 10px;
        height: 100%;

        .streamer-picture {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .streamer-info {
          display: flex;
          flex-direction: column;

          p {
            margin: 0;
            text-wrap: ellipsis;
            -webkit-line-clamp: 1;
                    line-clamp: 1;

            &.streamer-display-name {
              font-weight: bold;
            }
            &.streamer-game-name {
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }

      .streamer-status {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;

        .live-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-primary);
          margin-right: 5px;
        }
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
    border-top-left-radius: 20px;
  }
}
</style>
