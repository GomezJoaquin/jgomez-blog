<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
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

    <!-- Contenido principal -->
    <main class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Información personal -->
        <div>
          <h1 class="text-4xl font-bold mb-4">¡Hola, Soy Joaquín!</h1>
          <p class="text-lg text-gray-300 mb-6">
            Soy un apasionado de la tecnología y el DevOps. En mi blog encontrarás artículos sobre desarrollo, infraestructura, automatización y más.
          </p>
          <nuxt-link to="/blog" class="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Explorar el Blog</nuxt-link>
          <nuxt-link to="/contacto" class="inline-block px-6 py-3 ml-4 border border-blue-500 text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">Contactarme</nuxt-link>
        </div>
        
        <!-- Intereses -->
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-2xl font-bold mb-4">Mis Intereses</h2>
          <ul class="text-lg text-gray-300">
            <li>Tecnología</li>
            <li>DevOps</li>
            <li>Automatización</li>
            <li>Desarrollo de Software</li>
            <li>Infraestructura en la Nube</li>
          </ul>
        </div>
      </div>

      <!-- Nueva sección -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold mb-4">¿Qué estoy haciendo ahora?</h2>
        <p class="text-lg text-gray-300">Aquí puedes encontrar una breve descripción de lo que estoy trabajando actualmente.</p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 text-center text-gray-300">
        <p>&copy; 2024 Joaquín Gómez. Todos los derechos reservados.</p>
        <p>Desarrollado <span class="text-red-500">&#10084;</span> utilizando Nuxt.js y Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Importa el componente Header

export default {
  name: 'HomePage',
  components: {
    Header, 
  }
}
</script>