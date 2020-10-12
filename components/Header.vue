<template>
  <header class="header" id="start">
    <div class="header-logo-container">
      <h1 class="header__logo" ref="header-logo">
        Made <span>By</span> <span>Kawka</span>
      </h1>
    </div>
    <p class="header__subtitle">
      {{ $t(`header.entry1`) }}
    </p>
    <p class="header__subtitle">
      {{ $t(`header.entry2`) }}
    </p>
    <a class="button button--header" v-scroll-to="`#portfolio`">
      {{ $t(`header.button`) }}
    </a>
  </header>
</template>

<script>
import VueImgLoader from 'vue-img-loader';
export default {
  components: {
    VueImgLoader
  },
  data() {
    return {
      headerText: ["Made \nby \nKawka."]
    };
  },
  methods: {
    goToAction() {
      this.$router.push("/portfolio");
    },
    endOfTyping() {
      this.$refs["header-logo"].classList.remove("header__logo--hide-before");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  padding-top: $s8;
  margin-bottom: $s7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column wrap;
  position: relative;
}

.header__logo {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  color: $details-color;
  font-size: $font-size-extra;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

}

.header-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__logo span {
  font-size: $font-size-logo !important;
}

.header__logo--hide-before:before {
}
.header__logo:before {
  @include before-circle();
}

.header__subtitle {
  margin-top: $s4;
  font-size: $font-size-medium;
  color: $text-color;
  width: 55%;
  text-align: center;
}

.button--header {
  margin-top: $s4;
}

@media only screen and (max-width: $mobile) {


  .header__subtitle {
    margin-top: $s6;
    width: 80%;
  }
}
</style>
