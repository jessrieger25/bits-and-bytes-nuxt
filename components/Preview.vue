<template>
  <v-card :to="preview._path" nuxt>
    <v-img :src="imgSrc(preview)" height="200px" cover></v-img>
    <v-card-title class="preview_title pb-0">{{
      preview.attributes.title
    }}</v-card-title>
    <v-card-text class="pb-3 mb-0 preview_date">{{
      getDate(preview.attributes.date)
    }}</v-card-text>
    <v-card-text class="preview_text pt-0">{{
      preview.attributes.excerpt
    }}</v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment'
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
    },
    getDate(dateString) {
      const dateObj = moment(dateString)
      return dateObj.format('MM-DD-YYYY')
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
  font-weight: 500;
}
.preview_date {
  font-size: 0.8em;
}
</style>
