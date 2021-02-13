<template>
  <v-container>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in loadInstructions()" :key="item">
        {{ item }}
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  props: {
    // items: {
    //   type: Array,
    //   required: true
    // },
    title: {
      type: String,
      required: true
    },
    filePath: {
      type: String,
      required: true
    },
    jsonKey: {
      type: String,
      required: true
    }
  },
  methods: {
    loadInstructions() {
      return require('../../content/blog/2021-01-06/info.json')[this.jsonKey]
    }
  }
}
</script>
