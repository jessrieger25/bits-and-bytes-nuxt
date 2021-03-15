<template>
  <v-content>
    <v-container>
      <article>
        <h1 class="postTitle">{{ post.title }}</h1>
        <nuxt-content :document="post" />
      </article>
    </v-container>
  </v-content>
</template>

<style>
.hero-img {
  float: left;
  margin-right: 20px;
  height: 300px;
}
</style>

<script>
export default {
  computed: {},
  async asyncData({ $content, params }) {
    try {
      const post = await $content(`blog/${params.date}`, params.slug).fetch()
      console.log(post)
      return {
        post
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
</script>
