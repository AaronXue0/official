<template>
  <v-container style="position:relative;top:-70px">
    <!-- height: 100vh; max-height: 150%; -->
    <v-form ref="form" id="form">
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-card class="mx-auto" elevation="0">
            <v-card-title class="headline">Contact Us</v-card-title>
            <v-card-subtitle
              >Tell us anything you want. Even the moment you felt in our games.
            </v-card-subtitle>
          </v-card>
          <v-card class="mx-auto pa-5" elevation="0">
            <v-text-field
              class="primary--text"
              color="white"
              label="Email"
              required
            ></v-text-field>
          </v-card>
          <v-card class="mx-auto pa-5" elevation="0">
            <v-textarea label="Message"> </v-textarea>
            <v-btn
              color="black"
              class="mx-auto pa-5  primary--text"
              @click="send"
              elevation="0"
            >
              Send
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
// import { postForm } from "@/api/forms/postForm.js";

export default {
  data() {
    return {};
  },
  methods: {
    send() {},
    setSubmitState() {}
  }
};
</script>

<style>
@font-face {
  font-family: "Zpix";
  src: url("~@/assets/Zpix.ttf");
}
.contactForm {
  font-family: "Zpix", "Press Start 2P", cursive;
}
</style>
