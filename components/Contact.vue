<template>
  <section class="section contact" id="contact">
    <h2 class="section__title section__title--light" v-view="titleHandler">
       {{ $t(`sectionTitles.contact`) }}
    </h2>
    <a href="tel:+48690060242" class="contact__email">690 - 060 - 242</a>
    <a href="mailto:kontakt@madebykawka.pl" class="contact__phone"
    >kontakt@madebykawka.pl</a
    >
    <div class="form-container">
      <ContactForm/>
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  components: {
    ContactForm
  },
  methods: {
    titleHandler(el) {
      if (el.percentTop < 0.7) {
        el.target.element.classList.remove("section__title--hide-pseudo-el");
      } else {
        el.target.element.classList.add("section__title--hide-pseudo-el");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section__title {
  margin-top: $s5;
}

.contact {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

.form-container {
  width: 100%;
  margin: $s5 0;
  display: flex;
  justify-content: center;
}

.contact__email {
  font-size: $font-size-medium;
  font-weight: $font-weight-medium;
  color: $text-color;
  margin-top: $s4;
  color: #fff;
  text-decoration: none;
}

.contact__phone {
  margin-top: $s1;
  font-weight: $font-weight-medium;
  color: #fff;
  text-decoration: none;
}
</style>
