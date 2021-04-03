<template>
  <v-app-bar elevation="0" color="white">
    <v-card-title class="Noto">
      <!-- <span style="font-size:25px;position:relative;top:-5px;margin-left:5px">Project</span> -->
      <v-card elevation="0">
        <v-btn color="white" text to="/">
          <v-img :src="require('@/assets/starry.png')" width="150" />
        </v-btn>
      </v-card>
      <v-btn
        style="margin-left:10px"
        v-for="(item, index) in headerContent"
        :key="index"
        class="mark"
        text
        color="white"
      >
        <span class="black--text"> - {{ item.name }} </span>
      </v-btn>
      <!-- <v-card-subtitle> - LOMO</v-card-subtitle> -->
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

<script>
export default {
  components: {},
  data() {
    return {
      headerContent: [
        { name: "Soul of Butterflies", url: "" },
        { name: "Escape !", url: "" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.div-card {
  position: relative;
  /* top: -15px; */
  /* left: 30px; */
  /* background: rgba(255, 202, 40, 0.5); */
  background-image: linear-gradient(to bottom right, #1d3a50, #504b79);
  opacity: 100%;
  z-index: 0;
  margin-bottom: -550px;
  white-space: nowrap;
}
.mark:hover {
  background: linear-gradient(to top, #1d3a50 50%, transparent 50%);
  border-radius: 0;
}
/* linear-gradient(to bottom right, #1d3a50 50%, #504b79 50%) 50%, */
</style>
