<template>
  <v-card class>
    <v-img :src="imgSrc(preview)" height="300px" cover></v-img>
    <v-card-title>{{ preview.attributes.title }}</v-card-title>
    <v-card-text>{{ preview.attributes.excerpt }}</v-card-text>
    <v-card-actions>
      <v-btn :to="preview._path" nuxt>Read More ...</v-btn>
    </v-card-actions>
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

<style scoped></style>
