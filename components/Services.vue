<template>
  <section class="section" id="services">
    <h2 class="section__title section__title--before" v-view="titleHandler"> {{ $t(`sectionTitles.offer`) }}</h2>

    <div class="services">
      <div class="services-item" v-view="viewHandler" >
        <img src="/landing.svg" class="service-item__icon"/>
        <h3 class="services-item__name" > {{ $t(`services.landing.title`) }}</h3>

        <p class="services-item__desc">
          {{ $t(`services.landing.content`) }}
        </p>
      </div>
      <div class="services-item" v-view="viewHandler"  >
        <img src="/shops.svg" class="service-item__icon"/>
        <h3 class="services-item__name">{{ $t(`services.ecommerce.title`) }}</h3>
        <p class="services-item__desc">
          {{ $t(`services.ecommerce.content`) }}
        </p>
      </div>
      <div class="services-item" v-view="viewHandler"  >
        <img src="/iv.svg" class="service-item__icon"/>
        <h3 class="services-item__name">{{ $t(`services.design.title`) }}</h3>
        <p class="services-item__desc">
          {{ $t(`services.design.content`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    viewHandler(el) {
      if (el.percentTop < 0.7) {
        el.target.element.classList.add("services-item--hover");
      } else {
        el.target.element.classList.remove("services-item--hover");
      }
    },
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
.services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  margin-top: $s4;
}

.services-item {
  width: 100%;
  height: 100%;
 text-align: center;


  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  color: $text-color;
  transform: scale(0.9);
  transition: 0.25s all ease-in-out;
}

//.services-item:hover::before,
//.services-item:focus::before {
//  content: "";
//  display: flex;
//  align-items: center;
//  position: absolute;
//  width: 100%;
//  top: 0;
//  padding: 1rem 0;
//  height: 100%;
//  transform: translateX(100%);
//  background: $details-color;
//  animation: menuaa 0.25s ease-in-out forwards alternate;
//  z-index: -1;
//}

@keyframes menuaa {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(10%);
  }
}

@keyframes menuaaa-mobile {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

.services-item--hover {
  transform: scale(1);
}

//.services-item--hover:before {
//  content: "";
//  display: flex;
//  align-items: center;
//  position: absolute;
//  width: 100%;
//  top: 0;
//  left: 0;
//  padding: 1rem 0;
//  height: 100%;
//  transform: translateX(-50%);
//  background: $details-color;
//  animation: menuaa 0.25s ease-in-out forwards alternate;
//  z-index: -1;
//}

.services-item__name {
  width: 100%;
  margin-top: $s2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-large;
  font-weight: $font-weight-medium;
}

.service-item__icon {
  width: $s5;
}

.services-item__desc {
  //margin-left: $s3;
  margin-top: $s3;
  font-size: $font-size-small;
  width: 90%;
}

@media only screen and (max-width: $mobile) {
  .services-item {
    flex-flow: column wrap;
  }

  .services-item__name {
    margin-right: 0;
    width: 100%;
  }

  .services-item__desc {
    margin-top: $s2;
    width: 90%;
  }

  .services-item:hover::before {
    width: 100%;
  }

  .services-item--hover:before {
    width: 100%;
    left: 0;
  }
}

@media only screen and (max-width: $tablets) {
  .services {
    padding: 0 $s2;
    grid-template-columns: 1fr;
    gap: $s5;
  }
}

</style>
