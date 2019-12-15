<template>
  <!-- <nav> -->
  <v-app-bar app dark color="blue">
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

    <v-toolbar-title class="headline text-uppercase">
      <span>Bits and Bytes</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="deep-purple" to="/" nuxt>Home</v-btn>
  </v-app-bar>
  <!-- <v-navigation-drawer dark v-model="drawer" app>
      <v-list nav dark>
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
  </v-navigation-drawer>-->
  <!-- </nav> -->
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
