<template>
  <v-app-bar app dark color="blue">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" app dark absolute bottom temporary>
      <v-list dark>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in navItems"
            :key="i"
            :to="item.path == '#' ? '' : item.path"
            @click="drawer = !drawer"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar-title class="headline text-uppercase">
      <NuxtLink to="/" class="nav-link-active">Bits and Bytes</NuxtLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ByteHeader',
  data: () => ({
    drawer: false,
    model: 1,
    navItems: [
      { title: 'Recipes', active: true, path: '/' },
      { title: 'Reviews', active: false, path: '/reviews' },
      { title: 'Who am I?', active: true, path: '/about' }
    ]
  })
}
</script>

<style scoped>
.nav-link-active {
  color: #ffffff;
  text-decoration: none;
}
</style>
