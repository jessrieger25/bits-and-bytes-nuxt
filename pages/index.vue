<template>
  <v-content>
    <h1 class="pt-6">New Releases</h1>
    <v-container grid-list-md fluid class="px-2">
      <v-row
        :class="{
          'mx-5': $vuetify.breakpoint.mdAndUp,
          'mx-0': $vuetify.breakpoint.smAndDown
        }"
      >
        <v-col
          v-for="post in this.posts"
          :key="post.id"
          :md="3"
          :sm="12"
          :xs="12"
          class
        >
          <Preview :preview="post" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>

<script>
import Preview from '../components/Preview'

export default {
  components: {
    Preview
  },
  async asyncData() {
    const context = await require.context('~/content/blog', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/blog/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  },
  methods: {
    imgSrc(post) {
      return require(`~/assets/images/blog/${post.attributes.hero}`)
    }
  }
}
</script>
