<template>
  <header class="bg-gray-800 py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Joaquín Gómez</h1>
      <nav>
        <ul class="flex space-x-6">
          <li><nuxt-link to="/" class="hover:text-gray-300">Inicio</nuxt-link></li>
          <li><nuxt-link to="/blog" class="hover:text-gray-300">Blog</nuxt-link></li>
          <li><nuxt-link to="/about" class="hover:text-gray-300">Sobre mí</nuxt-link></li>
          <li><nuxt-link to="/contacto" class="hover:text-gray-300">Contacto</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
