<template>
  <section class="section" id="benefits">
    <h2
      class="section__title section__title--light section__title--hide-pseudo-el"
      v-view="titleHandler"
    >
      {{ $t(`sectionTitles.whyme`) }}
    </h2>
    <div class="whyme">
      <div
        class="whyme-item"
        v-for="item in whyme"
        :key="item.id"
        v-view="whymeHandler"
      >
        <img :src="item.image" class="icon" v-lazy-load  :alt="`${item.id} icon`"/>
        <p class="whyme-item__title"> {{ $t(`whyme.${item.id}.title`) }}</p>
        <p class="whyme-item__desc">
         {{ $t(`whyme.${item.id}.desc`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Benefits",
  data() {
    return {
      whyme: [
        {
          image: "/seo.svg",
          id: "seo"
        },
        {
          image: "/padlock.svg",
          id: "security"
        },
        {
          image: "/money-bag.svg",
          id: "finances"
        },
        {
          image: "/calendar.svg",
          id: "timeliness"
        },
        {
          image: "/coding.svg",
          id: "rwd"
        },
        {
          image: "/analytics.svg",
          id: "analitycs"
        }
      ]
    };
  },
  methods: {
    whymeHandler(el) {
      if (el.percentTop < 0.7) {
        el.target.element.classList.add("whyme-item--hover");
      } else {
        el.target.element.classList.remove("whyme-item--hover");
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
.section {
  margin-top: $s6;
}

.whyme {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
}

.whyme-item {
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  margin: $s4 0 $s2 0;
  padding: 1rem;
  transition: 0.25s all ease-in-out;
  transform: scale(0.9);
  padding: 3rem;
}

.whyme-item--hover {
  transform: scale(1);
}

.whyme-item:hover {
  transform: scale(1);
}
.icon {
  fill: red;
  width: $s5;
}

.whyme-item__title {
  color: $text-light;
  font-size: $font-size-large;
  margin-top: $s2;
  font-weight: $font-weight-medium;
}



.whyme-item__desc {
  color: $text-light;
  font-size: $font-size-small;
  margin-top: $s2;
  text-align: center;
}

@media all and (max-width: $mobile) {
  .whyme {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .whyme-item {
    width: 90%;
  }
  .section {
    margin-top: $s3;
  }

  .whyme-item__desc {
    font-size: $font-size-medium;
  }
}
</style>
