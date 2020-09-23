<template>
  <v-app>
    <v-content style="height: 100vh; max-height: 100%;">
      <router-view></router-view>
    </v-content>
    <foot />
  </v-app>
</template>

<script>
import foot from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    foot
  }
};
</script>
