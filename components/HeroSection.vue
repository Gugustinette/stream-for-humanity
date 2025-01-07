<template>
  <NuxtImg src="/assets/hero-background.png" class="hero-image hero-background" alt="Hero" />
  <NuxtImg src="/assets/hero-front.png" class="hero-image hero-parallax hero-glow" alt="Hero" />
  <NuxtImg src="/assets/hero-front.png" class="hero-image hero-parallax hero-front" alt="Hero" />
  <NuxtImg src="/assets/hero-chat.png" class="hero-image hero-parallax hero-chat" alt="Hero" />
  <NuxtImg src="/assets/hero-enfant.png" class="hero-image hero-parallax hero-enfant" alt="Hero" />
  <div class="hero-transition"></div>
  <div class="light sun-light"></div>
  <div class="light red-light"></div>
  <div class="light red-light-2"></div>
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
  // Compute the parallax effect on mouse move on the most front image
  const heroChatDom = document.querySelector('.hero-chat') as HTMLElement;
  heroChatDom.addEventListener('mousemove', handleMouseMove);
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
    let parallaxFactor = 0;
    switch (image.className.split(' ')[2]) {
      case 'hero-front':
        parallaxFactor = 0.01;
        break;
      case 'hero-glow':
        parallaxFactor = 0.01;
        break;
      case 'hero-chat':
        parallaxFactor = 0.02;
        break;
      case 'hero-enfant':
        parallaxFactor = 0.03;
        break;
    }

    image.style.transform = `translate(${distanceX * parallaxFactor}px, ${distanceY * parallaxFactor}px)`;
  });
};
</script>

<style lang="scss">
@keyframes sunLight {
  0% {
    background: #FFFDEB;
  }
  20% {
    background: #FFFDEB;
  }
  30% {
    background: #FFFFFF;
  }
  40% {
    background: #FFFDEB;
  }
  50% {
    background: #FFFFFF;
  }
  80% {
    background: #FFFDEB;
  }
  85% {
    background: #FFFFFF;
  }
  90% {
    background: #FFFDEB;
  }
  100% {
    background: #FFFDEB;
  }
}
@keyframes redLight {
  0% {
    background: #D83C24;
  }
  20% {
    background: #D83C24;
  }
  30% {
    background: #E1612B;
  }
  40% {
    background: #D83C24;
  }
  50% {
    background: #C15635;
  }
  80% {
    background: #D83C24;
  }
  85% {
    background: #E1612B;
  }
  90% {
    background: #D83C24;
  }
  100% {
    background: #D83C24;
  }
}

.hero-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.hero-parallax {
  position: absolute;
}

// Layers
.hero-background {
  filter: blur(2px);
}

.hero-glow {
  z-index: 1;
  filter: blur(10px) saturate(150%) brightness(3);
  margin-top: -1vh;
}

.hero-enfant {
  width: 110vw;
  height: 110vh;
  margin-top: -3vh;
  z-index: 1;
}

.hero-front {
  z-index: 2;
}

.hero-chat {
  z-index: 3;
}

// Red light overlay
.light {
  position: absolute;
  border-radius: 50%;
  background: #FFFFFF;
  filter: blur(100px);
  z-index: 1;
}
.sun-light {
  background: #FFFDEB;
  top: -10vh;
  left: 50vw;
  width: 30vw;
  height: 300px;
  filter: blur(120px);
  animation: sunLight 10s infinite;
}
.red-light {
  background: #D83C24;
  top: 50vh;
  left: 100px;
  width: 30vw;
  height: 100px;
  animation: redLight 10s infinite;
}
.red-light-2 {
  background: #D83C24;
  top: 50vh;
  right: 100px;
  width: 30vw;
  height: 100px;
  animation: redLight 10s infinite 2.5s;
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