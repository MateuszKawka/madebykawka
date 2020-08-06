<template>
  <section class="section" id="benefits">
    <h2 class="section__title">
      Dlaczego ja ?
    </h2>
    <div class="whyme">
      <div class="whyme-item" v-for="item in whyme" :key="item.title">
        <img :src="item.image" class="icon" />
        <p class="whyme-item__title">{{ item.title }}</p>
        <p class="whyme-item__desc">
          {{ item.desc }}
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
          title: "SEO",
          desc: `Wszystkie moje projekty są "SEO-Friendly" czyli gotowe do pozycjonowania w wyszukiwarkach. `
        },
        {
          image: "/safe-box.svg",
          title: "Bezpieczeństwo",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum ullam, tempora assumenda ea libero eum blanditiis at odio omnis accusamus dignissimos qui quasi nesciunt sequi."
        },
        {
          image: "/money-bag.svg",
          title: "Finanse",
          desc:
            "Skorzystaj z formularza na dole lub napisz bezpośrednio na kontakt@madebykawka.pl, ustalimy cenę akceptowalną dla obu stron. "
        },
        {
          image: "/calendar.svg",
          title: "Terminowość",
          desc:
            "Korzystając z moich usług możesz mieć pewność, że strona, której potrzebujesz, zawsze będzie gotowa na czas. "
        },
        {
          image: "/coding.svg",
          title: "Responsywność",
          desc:
            "Korzystam z najnowszych technologii i trendów, dzięki czemu twoja strona zawsze będzie wyglądać idealnie na wszystkich urządzeniach."
        },
        {
          image: "/analytics.svg",
          title: "Analiza",
          desc:
            "Na życzenie do swoich projektów instaluje wszelkie potrzebne narzędzia do analizowania ruchu na stronie. "
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: $s6;
}

.whyme {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}

.whyme-item {
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  margin-top: $s6;
  padding: 1rem;
  transition: 0.25s all ease-in-out;
}

.whyme-item:hover {
  transform: scale(1.1);
}
.icon {
  fill: red;
  width: 48px;
}

.whyme-item__title {
  color: $text-color;
  font-size: $font-size-medium;
  margin-top: $s2;
  font-weight: $font-weight-medium;
}

.whyme-item__desc {
  color: $text-grey;
  font-size: $font-size-small;
  margin-top: $s2;
  text-align: center;
}
</style>
