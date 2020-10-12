<template>
  <div
    class="navbar-container"
    :class="{ 'navbar-container--background': navBackground && isMobile }"
  >
    <nav class="navbar">
      <div class="navbar-logo-container">
        <transition>
        <p class="navbar__logo" v-if="showNavLogo">
          Made By Kawka
        </p>
        </transition>
      </div>
      <ul class="menu" :class="{ 'menu--show': showMenu }">
        <li v-for="item in navData" :key="item.name" class="menu-item">
          <a
            v-if="item.type === 'local'"
            href=""
            v-scroll-to="item.href"
            class="menu-item__link"
            @click="menuBind"
            >{{ $t(`menu.${item.value}`) }}</a
          >
        </li>
        <div class="language-switcher">
          <nuxt-link
            :to="switchLocalePath('pl')"
            @click="menuBind"
            class="language-switcher__item"
            :class="{ 'language-switcher__item--active': locale === `pl` }"
            >PL</nuxt-link
          >
          <nuxt-link
            :to="switchLocalePath('en')"
            @click="menuBind"
            class="language-switcher__item"
            :class="{ 'language-switcher__item--active': locale === `en` }"
            >EN</nuxt-link
          >
        </div>
      </ul>
      <MenuIcon @clicked="menuBind" :show-menu="showMenu" class="menu-icon" />
    </nav>
  </div>
</template>

<script>
import MenuIcon from "@/components/MenuIcon";

export default {
  name: "Navigation",
  components: {
    MenuIcon
  },
  data() {
    return {
      navData: [
        {
          name: "Start",
          href: "#start",
          type: "local",
          value: "start"
        },
        {
          name: "Oferta",
          href: "#services",
          type: "local",
          value: "offer"
        },
        // {
        //   name: "Portfolio",
        //   href: "/portfolio",
        //   type: "subpage"
        // },
        {
          name: "Opinie klientów",
          href: "#references",
          type: "local",
          value: "testimonials"
        },
        {
          name: "Realizacje",
          href: "#portfolio",
          type: "local",
          value: "works"
        },
        // {
        //   name: "O mnie",
        //   href: "#about-me",
        //   type: "local"
        // },
        {
          name: "Kontakt",
          href: "#contact",
          type: "local",
          value: "contact"
        }
      ],
      navBackground: false,
      headerHeight: 0,
      showMenu: false,
      isMobile: false,
      showNavLogo: false
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    scrollEvent() {
      const navbar = document.querySelector(".navbar-container");
      const header = document.querySelector(".header");
      if (window.pageYOffset - header.getBoundingClientRect().top > 300) {
        this.navBackground = true;
        this.showNavLogo = true;
      } else {
        this.navBackground = false;
        this.showNavLogo = false;
      }
    },
    menuBind() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    const header = document.querySelector(".header");
    this.headerHeight = header.getBoundingClientRect().height;
    window.addEventListener("scroll", this.scrollEvent);

    const menuIcon = document.querySelector(".menu-icon");
    if (menuIcon) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.language-switcher {

  display: flex;
}

.language-switcher__item {
  color: $text-color;
  margin: 0 0.5rem;
  cursor: pointer;
  padding: $s1;
}

.language-switcher__item--active {
  background: $details-color;
  color: $text-light;
}

.navbar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 $s3;
}

.navbar-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  transition: 0.25s all ease-in-out;
  z-index: 888;
}

.menu-icon {
  display: none;
}

.menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  position: relative;
  padding: 1rem 0;
}

.menu-item {
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.menu-item--contact {
  text-decoration: none;
  color: $text-grey;
  font-weight: $font-weight-light;
  font-size: $font-size-medium;
  transition: 0.25s all ease-in-out;
  padding: 0.5rem 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.menu-item--contact:hover {
  color: $text-color;
  border-bottom: 2px solid $details-color;
}

.menu-item__link {
  color: $text-grey;
  text-decoration: none;
  font-weight: $font-weight-light;
  padding: 0.5rem 2rem;
  font-size: $font-size-medium;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.25s all ease-in-out;
}

.menu-item__link {
  transition: 0.25s all ease-in-out;
}

.navbar__logo {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  color: $details-color;
  font-size: $font-size-small;
  position: relative;
  z-index: 1;
  width: 100%;
}

.navbar-logo-container {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__logo span {
  font-size: $font-size-small !important;
}

.menu-item__link:hover::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 2px;
  background: $details-color;
  transform: translateX(-100%);
  animation: menuaa 0.25s ease-in-out forwards alternate;
  z-index: -1;
}

@keyframes menuaa {
  to {
    transform: translateX(0);
  }
}

.navbar-container--background {
  background: $background-color;
}
.menu-item__link--special {
  margin-left: $s3;
  background: $details-color;
  color: $text-light;
}

@media all and (max-width: 900px) {
  .menu {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    padding: 10rem 0;
    background: #fff;
    transform: translateY(-100%);
    transition: 0.3s transform ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .menu--show {
    transform: translateY(0);
  }

  .navbar {
    width: 100%;
  }

  .navbar-container {
    flex-flow: column wrap;
  }

  .menu-item {
    margin-top: 3rem;
  }

  .menu-item__link {
    font-size: 1.8rem;
  }

  .menu-icon {
    display: block;
    position: absolute;
    z-index: 888;
    right: $s1;
  }
  .menu-icon > span {
    width: 50px;
    height: 3px;
    background: #000;
    display: block;
    transition: all 0.3s ease-in-out;
  }

  .line-1 {
    width: 42px;
    justify-self: end;
  }

  .line-2 {
    width: 35px;
    justify-self: end;
  }

  .menu-icon:hover span:nth-child(1) {
    width: 35px;
  }

  .menu-icon:hover span:nth-child(2) {
    width: 40px;
  }

  .menu-item__link--special {
    margin-left: 0;
  }

  .language-switcher {
    margin-top: $s2;
  }

  .navbar-logo-container {
    margin: $s1 0;
    text-align: center;
  }

  .navbar__logo {
    align-items: center;
  }

}
</style>
