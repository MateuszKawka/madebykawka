<template>
  <div class="app">
    <Navigation />
    <Nuxt />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
export default {
  name: "DefaultLayout",
  components: {
    Footer,
    Navigation
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $default-font-family;
  font-size: $font-size-medium;
  line-height: 130%;
}

html {
  font-size: 62.5%;
}

.app {
  background: $background-color;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
