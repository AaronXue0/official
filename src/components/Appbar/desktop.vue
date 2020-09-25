<template>
  <v-app-bar elevation="0" color="white">
    <v-card-title class="Noto">
      <!-- <span style="font-size:25px;position:relative;top:-5px;margin-left:5px"
        >Project</span
      > -->
      <v-card elevation="0">
        <v-btn color="white" text to="/">
          <v-img :src="require('@/assets/starry.png')" width="150" />
        </v-btn>
      </v-card>
      <v-card-subtitle style="margin-left:10px">- KA Pong</v-card-subtitle>
      <v-card-subtitle> - LOMO</v-card-subtitle>
      <v-spacer />
    </v-card-title>
    <template v-slot:extension>
      <v-btn
        href="https://www.facebook.com/Game-Starry-109356847225732"
        icon
        small
        color="white"
        style="margin-left:28px;"
      >
        <v-icon color="black" small>fab fa-facebook-f</v-icon>
      </v-btn>
      <v-btn href="https://twitter.com/projectstarry1" icon small color="white">
        <v-icon color="black" size="19">mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon small color="white" :to="{ name: 'Contact' }">
        <v-icon color="black" size="19">mdi-message-reply-text</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
