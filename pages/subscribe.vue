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
        action="/"
        method="POST"
        netlify
        netlify-honeypot="bot-field"
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
