<template>
  <v-app>
    <div class="hidden-md-and-down"><desktop class="Noto" /></div>
    <div class="hidden-lg-and-up"></div>
  </v-app>
</template>

<script>
import desktop from "@/components/Home/HomeContent.vue";
export default {
  components: {
    desktop,
  },
  data() {
    return {
      items: [{ src: require("@/assets/kapong.png") }],
    };
  },
  methods: {},
  mounted() {},
};
</script>
