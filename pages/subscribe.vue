<template>
  <v-content>
    <v-container>
      <h1>Subscribe Now!</h1>
      <p>
        Enter your contact info to receive monthly newsletters and alerts when
        new recipes are posted!
      </p>
      <form
        name="contactus"
        netlify
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <v-row>
          <v-col lg="3" md="3" sm="12">
            <v-text-field type="text" name="name" required label="Name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="3" md="3" sm="12">
            <v-text-field type="email" name="email" required label="Email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="3" md="3" sm="12">
            <v-textarea
              outlined
              name="message"
              required
              label="Message"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn type="submit" value="Send message" color="primary">Send</v-btn>
        <input type="hidden" name="form-name" value="contactus" />
      </form>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Subscribe',
  components: {},
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contactus',
            ...this.form
          }),
          axiosConfig
        )
        .then((data) => {
          this.$store.commit(
            'alert/setAlert',
            { message: 'Thank you for subscribing!', type: 'success' },
            { root: true }
          )
          this.$router.push('/')
        })
        .catch((e) => {
          this.$store.commit(
            'alert/setAlert',
            {
              message: 'Error submitting your request, please try again.',
              type: 'warning'
            },
            { root: true }
          )
          this.$router.push('/subscribe')
        })
    }
  }
}
</script>
