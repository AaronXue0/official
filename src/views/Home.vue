<template>
  <v-app>
    <div class="hidden-md-and-down"><desktop class="Noto" /></div>
    <div class="hidden-lg-and-up"><mobile class="Noto" /></div>
  </v-app>
</template>

<script>
import desktop from "@/components/Home/HomeContent.vue";
import mobile from "@/components/Home/HomeContentMob.vue";
export default {
  components: {
    desktop,
    mobile,
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
