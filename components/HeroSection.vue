<template>
  <NuxtImg src="/assets/hero-background.png" class="hero-image hero-background" alt="Hero" />
  <NuxtImg src="/assets/hero-front.png" class="hero-image hero-parallax hero-front" alt="Hero" />
  <NuxtImg src="/assets/hero-chat.png" class="hero-image hero-parallax hero-chat" alt="Hero" />
  <NuxtImg src="/assets/hero-enfant.png" class="hero-image hero-parallax hero-enfant" alt="Hero" />
  <div class="hero-transition"></div>
  <FireParticles />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

/**
 * Parallax effect on hero images
 */
const heroImages = ref<HTMLElement[]>([]);

onMounted(() => {
  heroImages.value = Array.from(document.querySelectorAll('.hero-parallax'));
  document.addEventListener('mousemove', handleMouseMove);
});

const handleMouseMove = (event: MouseEvent) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  heroImages.value.forEach((image) => {
    const imageRect = image.getBoundingClientRect();
    const imageCenterX = imageRect.left + imageRect.width / 2;
    const imageCenterY = imageRect.top + imageRect.height / 2;

    const distanceX = mouseX - imageCenterX;
    const distanceY = mouseY - imageCenterY;

    // Adjust the parallax effect strength
    const parallaxFactor = 0.005;

    image.style.transform = `translate(${distanceX * parallaxFactor}px, ${distanceY * parallaxFactor}px)`;
  });
};
</script>

<style lang="scss">
.hero-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.hero-parallax {
  position: absolute;
}

// Layering
.hero-front {
  z-index: 1;
}

.hero-chat {
  z-index: 2;
}

.hero-enfant {
  z-index: 3;
}

// Hero transition overlay
.hero-transition {
  position: absolute;
  top: 80vh;
  left: 0;
  width: 100vw;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), #0A0502);
  z-index: 4;
}
</style>