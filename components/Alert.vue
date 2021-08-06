<!-- Alert.vue -->
<template>
  <v-container align="center">
    <v-alert
      class="text-center"
      :value="!!alert['message']"
      :type="alert['type']"
      dismissible
      dense
      text
      @input="closeAlert"
      >{{ alert['message'] }}</v-alert
    >
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['alert'])
  },

  methods: {
    ...mapMutations('alert', ['setAlert']),
    closeAlert(val) {
      this.setAlert({})
    }
  }
}
</script>
