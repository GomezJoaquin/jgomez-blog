<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <div class="text-gray-600 mb-4">
      <p>Author: {{ post.author }}</p>
      <p>Date: {{ post.date }}</p>
    </div>
    <div class="prose">
      <!-- Contenido del post -->
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    // Obtener el slug del post de los parámetros de ruta
    const slug = params.slug;
    // Obtener el contenido del post utilizando el módulo @nuxt/content
    const post = await this.$content('blog', slug).fetch();
    return { post };
  },
  data() {
    return {
      post: {} // Objeto para almacenar los detalles del post
    };
  }
};
</script>