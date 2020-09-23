<template>
  <v-app>
    <div class="hidden-md-and-down"><Home class="Noto" /></div>
    <div class="hidden-lg-and-up"></div>
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
