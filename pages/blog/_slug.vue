<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <div class="text-gray-600 mb-4">
      <p>Author: {{ post.author }}</p>
      <p>Date: {{ post.date }}</p>
    </div>
    <div class="prose">
      <!-- Contenido del post -->
      <div v-html="post.body"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug;
    const post = await $content('blog').where({ slug }).fetch();
    return { post };
  }
};
</script>