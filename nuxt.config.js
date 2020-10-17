import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - BK-BEYOND',
    title: 'BK-BEYOND | Online News and Events',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: "theme-color", content: "#FFF" },
      {
        hid: "keywords",
        name: "keywords",
        content: "Bangkok news, evetns, tourist place, restaurant, life style in Bangkok"
      },
      {
        hid: "description",
        name: "description",
        content: "Updated Bangkok news, evetns, tourist place, restaurant and life style"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost",
    baseUrlPicApi: process.env.BASE_URL_PIC_API || "http://localhost",
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/style.scss",
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
    ]
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
