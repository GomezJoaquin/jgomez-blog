<template>
  <header class="bg-gray-800 py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <h1 class="text-3xl font-semibold text-white">Joaquín Gómez</h1>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <nuxt-link to="/" class="text-gray-300 hover:text-white">Inicio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog" class="text-gray-300 hover:text-white">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="text-gray-300 hover:text-white">Sobre mí</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacto" class="text-gray-300 hover:text-white">Contacto</nuxt-link>
          </li>
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
