<template>
  <v-app>
    <appbar class="Noto" />
    <router-view></router-view>
    <foot class="Noto" />
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue";
import foot from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    appbar,
    foot
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}
.Press2P {
  font-family: "Press Start 2P", cursive;
}
div > .v-application--wrap {
  min-height: 100%;
}

@font-face {
  font-family: "Zpix";
  src: url("~@/assets/fonts/Zpix.ttf");
}
.Zpix {
  font-family: "Zpix", "Noto Sans", sans-serif, "Press Start 2P", cursive;
}

.div-card {
  background-image: linear-gradient(to bottom right, #1d3a50, #504b79);
  z-index: 0;
  margin-bottom: -550px;
  white-space: nowrap;
  /* top: -15px; */
  /* left: 30px; */
  /* opicaty: 100% */
  /* background: rgba(255, 202, 40, 0.5); */
}
.div-card-one {
  background-image: linear-gradient(to top left, #1d3a50, #504b79);
  z-index: 0;
  margin-bottom: -550px;
  white-space: nowrap;
  /* top: -15px; */
  /* left: 30px; */
  /* opicaty: 100% */
  /* background: rgba(255, 202, 40, 0.5); */
}
.div-card-two {
  background-image: linear-gradient(
    to top right,
    rgba(255, 202, 40, 0.5) 10%,
    transparent 50%
  );
  z-index: 0;
  margin-bottom: -550px;
  white-space: nowrap;
  /* top: -15px; */
  /* left: 30px; */
  /* opicaty: 100% */
  /* background: rgba(255, 202, 40, 0.5); */
}
</style>
