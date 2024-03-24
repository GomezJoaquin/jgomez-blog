<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/" class="text-white text-xl font-bold">Mi Blog</nuxt-link>
      <nav>
        <ul class="flex space-x-4">
          <li><nuxt-link to="/blog" class="text-white">Blog</nuxt-link></li>
          <li><nuxt-link to="/about" class="text-white">Sobre Mí</nuxt-link></li>
          <!-- Agrega más elementos del menú según sea necesario -->
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