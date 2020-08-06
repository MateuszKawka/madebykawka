<template>
  <header class="header" id="start">
    <h1 class="header__logo">Made<span> by</span> <span>Kawka</span></h1>
    <p class="header__subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi
      voluptas repellendus pariatur. Sapiente, aliquid ipsa repellat voluptas
      sit facilis magni maiores, temporibus.
    </p>
    <button class="button button--header">Nawiąż współpracę</button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  padding-top: $s8;
  margin-bottom: $s7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
}

.header__logo {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  color: $text-color;
  font-size: $font-size-logo;
  position: relative;
  z-index: 1;

  span {
    font-size: $font-size-logo;
  }
}

.header__logo:before {
  content: "";
  display: flex;
  align-items: center;
  position: absolute;
  width: 200%;
  top: 0;
  padding: 1rem 0;
  height: 100%;
  background: $details-color;
  z-index: -1;
  transform: translateX(-75%);
  transition: 0.25s all ease-in-out;
}

.header__subtitle {
  margin-top: $s4;
  font-size: $font-size-medium;
  color: $text-color-darken;
  width: 50%;
  text-align: center;
}

.button--header {
  margin-top: $s4;
}



</style>
