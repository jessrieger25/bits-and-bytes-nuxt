<template>
  <v-card :to="preview._path" nuxt>
    <v-img :src="imgSrc(preview)" height="200px" cover></v-img>
    <v-card-title class="preview_title">{{
      preview.attributes.title
    }}</v-card-title>
    <v-card-text class="preview_text">{{
      preview.attributes.excerpt
    }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Preview',
  components: {},
  props: {
    preview: Object()
  },
  data: () => ({}),
  computed: {},
  methods: {
    imgSrc(post) {
      return require(`~/assets/images/blog/${post.attributes.hero}`)
    }
  }
}
</script>

<style scoped>
.preview_title {
  font-size: 1em;
}
.preview_text {
  height: 60px;
}
</style>
