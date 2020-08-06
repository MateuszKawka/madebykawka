<template>
  <section class="section" id="references">
    <h2 class="section__title">Opinie klientów</h2>

    <div class="references">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="reference-item">
            <p class="reference--item__content">
              Dzięki Mati, zajebista stronka, naprawdę kozacka!  Dzięki Mati, zajebista stronka, naprawdę kozacka!  Dzięki Mati, zajebista stronka, naprawdę kozacka!
            </p>

            <p></p>
            <p class="reference-item__author">Paulina Kłys, dietly.pl</p>
            <p></p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="reference-item">
            <p class="reference--item__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, maiores tempore ad quibusdam deleniti sapiente
              molestiae eum cum quis voluptates error minus? Excepturi maxime
              cum cumque doloribus itaque voluptatibus expedita.
            </p>

            <p></p>
            <p class="reference-item__author">JOlanta Kłys, dietly.pl</p>
            <p></p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="reference-item">
            <p class="reference--item__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, maiores tempore ad quibusdam deleniti sapiente
              molestiae eum cum quis voluptates error minus? Excepturi maxime
              cum cumque doloribus itaque voluptatibus expedita.
            </p>

            <p></p>
            <p class="reference-item__author">Paulina Kłys, dietly.pl</p>
            <p></p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="reference-item">
            <p class="reference--item__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, maiores tempore ad quibusdam deleniti sapiente
              molestiae eum cum quis voluptates error minus? Excepturi maxime
              cum cumque doloribus itaque voluptatibus expedita.
            </p>

            <p></p>
            <p class="reference-item__author">Paulina Kłys, dietly.pl</p>
            <p></p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: $s6;
  background: #474844
}

.section__title {
  margin-top: $s4;
  color: #fff;
}

.references {
  margin-top: $s6;
  width: 100%;
  max-width: 620px;
  display: flex;
  justify-items: center;
  }

.reference-item {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: #fff;
}

.reference--item__content {

}

.reference-item__author {
  font-size: $font-size-big;
  font-weight: $font-weight-medium;
  margin-top: $s3;
}
</style>
