<template>
  <v-content>
    <v-card-title class="Noto">
      Project Starry
      <v-card-subtitle style="margin-left:100px">- KA Pong</v-card-subtitle>
      <v-card-subtitle>- LOMO</v-card-subtitle>
      <v-spacer />
      <v-card elevation="0">
        <v-img
          :src="require('@/assets/starry.png')"
          width="100"
          style="margin-right:20px"
        />
      </v-card>
    </v-card-title>
    <v-card-subtitle style="position:relative;top:0px">
      <v-btn icon small color="white">
        <v-icon color="black" small>fab fa-facebook-f</v-icon>
      </v-btn>
      <v-btn icon small color="white">
        <v-icon color="black" size="19">mdi-twitter</v-icon>
      </v-btn>
    </v-card-subtitle>
  </v-content>
</template>
