import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - BK-BEYOND',
    title: 'BK-BEYOND | Online News and Events',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: "theme-color", content: "#e2e4eb" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#e2e4eb" }, // IOS
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        hid: "keywords",
        name: "keywords",
        content: "bk-beyond, Bangkok news, evetns, tourist place, restaurant, life style in Bangkok"
      },
      {
        hid: "description",
        name: "description",
        content: "Updated Bangkok news, evetns, tourist place, restaurant and life style"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Bangkok news, evetns, tourist place, restaurant, life style in Bangkok - BK-BEYOND"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.bk-beyond.com/screen-web.png"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Updated Bangkok news, evetns, tourist place, restaurant and life style"
      },
      { hid: "og:url", property: "og:url", content: "https://www.bk-beyond.com" },
      { hid: "og:site_name", property: "og:site_name", content: "bk-beyond" },
      { hid: "og:type", property: "og:type", content: "article" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600|Material+Icons|Kanit|Quicksand|Sarabun|Montserrat:200,500,600,700"
      }
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost",
    baseUrlPicApi: process.env.BASE_URL_PIC_API || "http://localhost",
  },

  /**
   * Custom set port for dev & mobile
   */
  server: {
    port: 3334, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  /*
   ** Customize the progress-bar color
   */
  loading: true,
  loading: { color: "#f9da5c" , height: '3px'},
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/style.scss",
    'swiper/css/swiper.css' //(>= Swiper5)
  ],

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/nuxt-swiper-plugin.js", ssr: false, mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "nuxt-compress",
      {
        gzip: { cache: true },
        brotli: { threshold: 10240 }
      }
    ],
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
    '@nuxtjs/device',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
