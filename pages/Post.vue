<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <div class="text-gray-600 mb-4">Por {{ post.author }} el {{ formatDate(post.date) }}</div>
    <div v-html="post.body" class="prose"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      // Implementa la lógica para formatear la fecha si es necesario
      return dateString;
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
