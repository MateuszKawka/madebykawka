<template>
  <footer class="footer">
    <slot></slot>
    <button class="button button--light" @click="backToTop">{{ $t(`footer.button`) }}</button>
        <p>made by Kawka</p>
        <a href="tel:+48690060242">690 - 060 - 242</a>
        <a href="mailto:kontakt@madebykawka.pl">kontakt@madebykawka.pl</a>
        <p>Miękoszynek Polnych Kwiatów 6</p>
        <p>05-191 Nasielsk</p>
        <p>NIP: 5311708979</p>
  </footer>
</template>

<script>
export default {
  methods: {
    backToTop() {
      this.$scrollTo("#start");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-height: 20vh;
  height: 100%;
  padding: $s4 $s2;
  //margin-top: $s5;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.footer p, .footer a  {
  color: #b7b7b7;
  font-size: $font-size-medium;
  margin-top: $s1;
  text-decoration: none;
}
</style>
