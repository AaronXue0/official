<template>
  <div class="about">
    <v-container>
      <h1 class="about-title-right">Project Starry</h1>
      <h1 class="about-title">No Game, No Life</h1>
      <h1 class="about-title-mirror">No Game, No Life</h1>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 style="text-align: center;">
            Starry Concept.
          </h2>
        </v-col>
        <v-col cols="12">
          <h5 style="text-align: center;">
            Project Starry is a project that build the world of game. Garthing
            the indie game creators.<br />
            The venture studio is what we focus on. Let's write down our stories
            here build the worlds we want.
          </h5>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h2 style="text-align: center;">
            Subsidiaries
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-card elevation="0" v-for="i in 2" :key="i">
          <v-img
            max-width="300"
            :src="require('@/assets/TNO logo.png')"
            contain
          ></v-img>
          <h5 style="text-align: center;">
            The negative one
          </h5>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");
.about {
  font-family: "Noto Sans TC", sans-serif;
}
.about-title {
  position: relative;
  font-size: 30px;
}
.about-title-mirror {
  position: relative;
  top: -20px;
  opacity: 0.1;
  font-size: 30px;
}
.scroll-down-icon {
  position: relative;
  float: right;
}
.about-title-right {
  position: relative;
  float: right;
  font-size: 40px;
}
</style>
