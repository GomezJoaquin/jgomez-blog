export default {
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  router: {
    base: '/jgomez-blog/' // Configura la base URL para GitHub Pages
  },
  target: 'static' // Configura Nuxt.js para generar una aplicación estática
}
