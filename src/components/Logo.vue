<template>
  <RouterLink
  to="/"
  class="logo">
  <span>OMDbAPI</span>.com
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
  .logo {
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    font-weight:700;
    &:hover {
      color: $black;
    }
    span {
      color: $primary;
    }
  }
</style>