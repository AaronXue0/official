<template>
  <v-app>
    <Home class="hidden-md-and-down" />
    <div class="hidden-lg-and-up">a</div>
  </v-app>
</template>

<script>
import Home from "@/components/Home/HomeContent.vue";
export default {
  components: {
    Home
  },
  data() {
    return {
      items: [{ src: require("@/assets/kapong.png") }]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}
.payButton {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
.carousel-item img {
  height: 100vh !important ;
}
</style>
