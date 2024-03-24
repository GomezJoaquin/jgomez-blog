<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <div v-html="post.body" class="text-lg mb-6"></div>
      <a href="/" class="text-blue-500 hover:underline">Back home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ $content }) {
    const post = await $content('blog/about').fetch()
    return { post }
  }
}
</script>
