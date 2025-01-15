<template>
  <nav>
    <NuxtLink to="/">
      <NuxtImg src="/assets/logo.png" alt="Logo" />
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
  padding: 10px 30px;
  z-index: 100;

  img {
    height: 60px;
    color: var(--color-font);
  }

  ul {
    display: flex;
    list-style: none;
    column-gap: 30px;
    height: 100%;

    li {
      width: 100px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: var(--color-font);
      }
    }
  }
}
</style>
