<template>
  <div class="fire-particles">
    <NuxtParticles
      id="tsparticles"
      :options="options"
    >
    </NuxtParticles>
  </div>
</template>

<script setup lang="ts">
const options = {
  fullScreen: {
    enable: true
  },
  background: {
    color: {
      value: 'transparent'
    }
  },
  particles: {
    color: {
      value: "#D83C24",
      animation: {
        enable: true,
        type: 'value',
        speed: 1,
        sync: false,
        values: ["#D83C24", "#84BFFE"] // Red and blue
      }
    },
    move: {
      enable: true,
      direction: -90,
      speed: {
        min: 1,
        max: 3
      }
    },
    number: {
      value: 100
    },
    size: {
      value: {
        min: 0.5,
        max: 4
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 0.5
      }
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0
      }
    },
    shadow: {
      enable: true,
      color: "#D83C24",
      blur: 10,
      offset: {
        x: 0,
        y: 0
      }
    }
  }
}
</script>

<style lang="scss">
.fire-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: blur(2px);
}
</style>
