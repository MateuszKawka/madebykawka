<template>
  <div>
    <div class="container">
      <Header />
    </div>
    <div class="container">
      <Services />
    </div>
    <div class="background">
      <div class="container">
        <Benefits />
      </div>
    </div>
    <Portfolio />
    <div class="background">
      <div class="container">
        <References />
        <Footer>
          <Contact />
        </Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Portfolio from "@/components/Portfolio";
import References from "@/components/References";
import Contact from "@/components/Contact";
import AbouteMe from "@/components/AboutMe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  name: "Homepage",
  components: {
    Header,
    ContactForm,
    Services,
    Benefits,
    References,
    Contact,
    AbouteMe,
    Navigation,
    Footer,
    Portfolio
  },
  transition: "page"
};
</script>

<style lang="scss">
.background {
  background: $details-color;
}
</style>
