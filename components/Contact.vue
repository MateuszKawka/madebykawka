<template>
  <section class="section contact" id="contact">
    <h2 class="section__title">
      Kontakt
    </h2>
    <p class="contact__email">kontakt@madebykawka.pl</p>
    <p class="contact__phone">690 - 060 - 242</p>
    <div class="form-container">
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm"
export default {
    components: {
        ContactForm
    }
}
</script>

<style lang="scss" scoped>
.contact {
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
}

.contact__phone {
    margin-top: $s1;
    font-weight: $font-weight-medium;
}
</style>
