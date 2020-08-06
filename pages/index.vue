<template>
  <div>
    <div class="container">
      <Header />
    </div>
    <div class="container">
      <Services />
    </div>
    <div class="container">
      <Benefits />
    </div>
    <References />
    <div class="container">
      <Contact />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import References from "@/components/References";
import Contact from "@/components/Contact";
export default {
  name: "Homepage",
  components: {
    Header,
    ContactForm,
    Services,
    Benefits,
    References,
    Contact
  }
};
</script>
