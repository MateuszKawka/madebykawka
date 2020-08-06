<template>
  <div class="app">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
export default {
  name: "DefaultLayout",
  components: {
    Navigation,
    Footer
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
</style>
