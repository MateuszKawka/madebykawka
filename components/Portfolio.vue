<template>
  <section class="section" id="portfolio">
    <h2 class="section__title" v-view="titleHandler"> {{ $t(`sectionTitles.works`) }}</h2>

    <div class="portfolio">
      <div
        class="portfolio-item"
        v-for="(portfolioItem, index) in media"
        :key="portfolioItem.src"
      >
        <img
          :src="portfolioItem.src"
          :alt="portfolioItem.name"
          class="portfolio-item__image"
          @click="openGallery(index)"
          v-lazy-load
        />
      </div>
      <!-- <client-only>
      <VuePureLightbox
        thumbnail="/stow-preview.jpg"
        :images="['/stow-preview.jpg', '/stow-preview.jpg']"
      />
    </client-only> -->
    </div>


    <client-only>
      <light-box
        :media="media"
        :showLightBox="false"
        :showThumbs="false"
        ref="lightbox"
      />
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      media: [
        {
          // For image
          src: "/stow-preview-min.jpg",
          name: "Realizacja dla Stowarzyszenia Cateringów Dietetycznych"
        },
        {
          // For image
          src: "/bota-preview-min.png",
          name: "Realizacja dla firmy handlowej BOTA"
        }
      ]
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    titleHandler(el) {
      if (el.percentTop < 0.7) {
        el.target.element.classList.remove("section__title--hide-pseudo-el");
      } else {
        el.target.element.classList.add("section__title--hide-pseudo-el");
      }
    }
  },
  transition: "page"
};
</script>

<style lang="scss" scoped>
.portfolio-item {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  position: relative
}

.portfolio-item__name {
  text-align: center;
}

.portfolio-item__image {
  width: 100%;
  padding: 0 $s2;
  height: auto;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  transform: scale(0.9);
}

.portfolio-item__image:hover {
  transform: scale(1);
}

.portfolio {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-top: $s4;
  justify-self: center;
  align-content: flex-start;
}

@media all and (max-width: $tablets) {
  .portfolio {
    grid-template-columns: 1fr;
  }
}
</style>
