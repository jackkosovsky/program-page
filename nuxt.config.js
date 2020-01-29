export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: 'chocolate'},
  /*
  ** Global CSS
  */
  css: [
    '~assets/font/stylesheet.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
** Disabling Bootstrap Compiled CSS
*/
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  /*
  ** Style resources
  */
  styleResources: {
    scss: "~/assets/scss/main.scss"
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Build configuration
  */
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },
  build: {
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        // BootstrapVue and PortalVue require access to the global Vue reference (via import Vue from 'vue').
        // config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      }
    }
  }
}
