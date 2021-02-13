<template>
  <v-content>
    <v-container>
      <article>
        <h1 class="postTitle">{{ post.title }}</h1>
        <!-- <v-row class="postPic">
          <v-img
            :src="imgSrc"
            cover
            style="float: center;"
            class="mb-5"
          ></v-img>
        </v-row> -->
        <nuxt-content :document="post" />

        <!-- eslint-disable-next-line -->
        <!--<div class="myPost" v-html="post.html" />
    -->
      </article>
    </v-container>
  </v-content>
</template>

<style></style>

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
