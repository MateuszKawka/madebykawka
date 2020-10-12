export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Made By Kawka",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Najlepsze strony internetowe, front end development, webdevelopment, cms, wordpress, portale, witryny`
      },
      {
        name: "robots",
        content: "index, follow"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;800;900&display=swap",
        rel: "stylesheet"
      },
      {
        rel: "canonical", href: "https://www.madebykawka.pl"
      }
    ],
    htmlAttrs: {
      lang: 'pl-PL',
    },
  },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/main.scss", "vue-js-modal/dist/styles.css", "vue-image-lightbox/dist/vue-image-lightbox.min.css", "~assets/normalize.scss", "animate.css/animate.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/vue-scrollto", mode: "client" },
    { src: "@/plugins/vue-awesome-swipper", mode: "client" },
    { src: "@/plugins/vue-check-view", mode: "client" },
    { src: "@/plugins/vue-js-modal.js", mode: "client" },
    { src: "@/plugins/vue-typed.js", mode: "client" },
    { src: "@/plugins/vue-lightbox.js",  ssr: false },
    { src: '@/plugins/vue-image-preloader.js', ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-174230888-1'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", 'nuxt-lazy-load', ['nuxt-i18n', {
    defaultLocale: 'pl',
    fallbackLocale: 'pl',
    locales: [
      {
        code: 'pl',
        file: 'pl-PL.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/'
  }]
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  layoutTransition: 'layout'
};
