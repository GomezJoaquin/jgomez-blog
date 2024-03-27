export default {
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  router: {
    base: '/jgomez-blog/' // Configura la base URL para GitHub Pages
  },
  generate: {
    dir: 'docs' // Carpeta donde se generará la aplicación estática
  },
  target: 'static' // Configura Nuxt.js para generar una aplicación estática
}
