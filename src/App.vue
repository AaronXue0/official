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
</style>
