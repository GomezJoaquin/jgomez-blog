<template>
  <div>
    <Post :post="postContent" />
  </div>
</template>

<script>
import Post from '~/components/blog/Post.vue'; // Ajusta la ruta según tu estructura de archivos

export default {
  components: {
    Post
  },
  data() {
    return {
      postContent: {
        title: 'Ejemplo de Publicación',
        author: 'Autor Anónimo',
        date: '2024-03-23',
        body: `
          <p># Ejemplo de Publicación</p>
          <p>Esta es una publicación de ejemplo escrita en Markdown. Puedes <strong>formatear</strong> el texto <em>como</em> quieras y agregar enlaces <a href="https://example.com">a sitios web</a>.</p>
          <ul>
            <li>Puedes</li>
            <li>También</li>
            <li>Hacer</li>
            <li>Listas</li>
          </ul>
          <p>Y mostrar imágenes:</p>
          <p><img src="https://via.placeholder.com/400" alt="Imagen de ejemplo" /></p>
          <p>¡Disfruta escribiendo publicaciones en Markdown!</p>
        `
      }
    };
  }
}
</script>
