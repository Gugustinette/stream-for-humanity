<template>
  <nav>
      <NuxtLink to="/">
          <NuxtImg src="/stream-for-humanity-logo.png" alt="Logo" />
      </NuxtLink>
      <ul>
          <li>
              <NuxtLink to="/">Accueil</NuxtLink>
          </li>
          <li>
              <NuxtLink to="/streamers">Streamers</NuxtLink>
          </li>
      </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 100;

  img {
    height: 40px;
  }

  ul {
    display: flex;
    list-style: none;
    column-gap: 30px;
  }
}
</style>
