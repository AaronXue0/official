<template>
  <v-container class="Noto">
    <v-form ref="form" id="form">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="10">
          <v-card class="mx-auto" elevation="0">
            <v-card-title>Contact Us</v-card-title>
            <v-card-subtitle
              >Tell us anything you want. Even the moment you felt in our games.
            </v-card-subtitle>
          </v-card>
          <v-card class="mx-auto pa-5" elevation="0">
            <v-text-field
              class="primary--text"
              label="Email"
              required
            ></v-text-field>
          </v-card>
          <v-card class="mx-auto pa-5" elevation="0">
            <v-textarea label="Message"> </v-textarea>
            <v-btn color="black" @click="send" text>
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
    setSubmitState() {},
  },
};
</script>

<style>
.contactForm {
  font-family: "Zpix", "Press Start 2P", cursive;
}
</style>
