<template>
  <section class="section" id="references">
    <h2 class="section__title section__title--light" v-view="titleHandler"> {{ $t(`sectionTitles.testimonials`) }}</h2>

    <div class="references">
      <client-only>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <div class="reference-item">
              <p class="reference--item__content">
                A customer reference could consist of several people within a
                single company acting as advocates. The key is to group these
                based on the “story” rather than the specific solution. This
                allows each story to be shared to its maximum potential.
              </p>

              <p></p>
              <p class="reference-item__author">John Doe</p>
              <p></p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="reference-item">
              <p class="reference--item__content">
                A customer reference could consist of several people within a
                single company acting as advocates. The key is to group these
                based on the “story” rather than the specific solution. This
                allows each story to be shared to its maximum potential.
              </p>

              <p></p>
              <p class="reference-item__author">Dane Doe</p>
              <p></p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="reference-item">
              <p class="reference--item__content">
                A customer reference could consist of several people within a
                single company acting as advocates. The key is to group these
                based on the “story” rather than the specific solution. This
                allows each story to be shared to its maximum potential.
              </p>

              <p></p>
              <p class="reference-item__author">Pdasdas da sl</p>
              <p></p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="reference-item">
              <p class="reference--item__content">
                A customer reference could consist of several people within a
                single company acting as advocates. The key is to group these
                based on the “story” rather than the specific solution. This
                allows each story to be shared to its maximum potential.
              </p>

              <p></p>
              <p class="reference-item__author">Pdasdas da s</p>
              <p></p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        }
      }
    };
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
.section {
  margin-top: $s7;
  padding: $s5 0;
}


.section__title {
  margin-top: $s4;
}

.references {

  width: 100%;
  max-width: 720px;
  display: flex;
  justify-items: center;
}

.reference--item__content {
     text-align: center;
}

.reference-item {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: #fff;
  padding: $s2 $s7 $s6 $s7;
}

.reference-item__author {
  font-size: $font-size-big;
  font-weight: $font-weight-medium;
  margin-top: $s3;
}

@media only screen and (max-width: $mobile) {
  .reference--item__content {
    font-size: $font-size-small;
  }

  .references {
    width: 80%;
    margin-top: $s5;
  }

  .reference-item__author {
    font-size: $font-size-medium;
  }

  .section {
    margin-top: $s5;
    padding: $s2 0 $s4 0;
  }

  .reference--item__content {
    font-size: $font-size-medium;

  }

  .section__title {
    margin-top: $s2;
  }

  .reference-item {
    padding: $s2 0 $s6 0;
  }
}
</style>
