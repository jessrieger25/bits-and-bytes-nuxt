<template>
  <v-content>
    <v-container>
      <h1 class="postTitle">{{ post.attributes.title }}</h1>
      <div class="postPic">
        <v-img :src="imgSrc" cover style="float: center;" class="mb-5"></v-img>
      </div>
      <!-- eslint-disable-next-line -->
      <div class="myPost" v-html="post.html" />
    </v-container>
  </v-content>
</template>

<style>
.myPost {
  padding: 0;
  display: inline;
}
.cred {
  font-size: 10px;
  font-weight: 100px;
}
.postTitle {
  text-align: center;
}
.postPic {
  display: inline-block;
  float: left;
  margin-left: auto;
  margin-right: 20px;
  width: 25%;
}
@media screen and (max-width: 600px) {
  .postPic {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: 20px;
  }
}
.ingredients .instructions {
  text-align: left;
}
.ingredients {
  margin-right: 10px;
}
.catchPhrase {
  font-style: italic;
}
.recipeDescr {
  font-size: 16px;
}
.list-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 10px;
  background-color: #f1f1f1;
}
/* Float four columns side by side */
.list-column-1 {
  float: left;
  width: 25%;
}
.list-column-2 {
  float: left;
  width: 75%;
}
.list-column-half {
  float: left;
  width: 50%;
}
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .list-column-1 {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .list-column-2 {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .list-column-half {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
/* Remove extra left and right margins, due to padding in columns */
.list-row {
  margin: 0 -5px;
  display: block;
}

/* Clear floats after the columns */
.list-row:after {
  content: '';
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  computed: {
    imgSrc() {
      return require(`~/assets/images/blog/${this.post.attributes.hero}`)
    }
  },
  async asyncData({ params }) {
    try {
      const post = await import(
        `~/content/blog/${params.date}/${params.slug}.md`
      )
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
