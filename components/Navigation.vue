<template>
  <div
    class="navbar-container"
    :class="{ 'navbar-container--background': navBackground && isMobile }"
  >
    <nav class="navbar">
      <ul class="menu" :class="{ 'menu--show': showMenu }">
        <li v-for="item in navData" :key="item.name" class="menu-item">
          <a
            href=""
            v-scroll-to="item.href"
            class="menu-item__link"
            @click="menuBind"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <div class="menu-icon" @click="menuBind">
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navData: [
        {
          name: "Start",
          href: "#start"
        },
        {
          name: "Usługi",
          href: "#services"
        },
        {
          name: "Oferta",
          href: "#offer"
        },
        {
          name: "Opinie klientów",
          href: "#references"
        },
        {
          name: "O mnie",
          href: "#about-me"
        },
        {
          name: "Kontakt",
          href: "#contact"
        }
      ],
      navBackground: false,
      headerHeight: 0,
      showMenu: false,
      isMobile: false
    };
  },
  methods: {
    scrollEvent() {
      const navbar = document.querySelector(".navbar-container");
      const header = document.querySelector(".header");
      if (window.pageYOffset > header.getBoundingClientRect().top) {
        this.navBackground = true;
      } else {
        this.navBackground = false;
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
.navbar-container {
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  transition: 0.25s all ease-in-out;
  z-index: 10;
}

.menu-icon {
  display: none;
}

.menu {
  display: flex;
  list-style-type: none;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1rem;
    height: 1px;
    background: $text-color;
  }
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
  transition: 0.25s color ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.25s all ease-in-out;
}

.menu-item__link {
  transition: 0.25s all ease-in-out;
}

.menu-item__link:hover::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: $details-color;
  transform: translateX(-100%);
  animation: menuaa 0.25s ease-in-out forwards alternate;
  z-index: -1;
}

@keyframes menuaa {
  to {
    transform: translateX(-40%);
  }
}

.navbar-container--background {
  background: $background-color;
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
    transform: translateY(-200%);
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
    height: 1;
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
    display: grid;
    place-items: center;
    height: 55px;
    width: 50px;
    cursor: pointer;
    position: absolute;
    top: -4px;
    right: 12px;
    transform: scale(0.5);
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
}
</style>
