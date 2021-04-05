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
        text
        small
        color="primary"
        elevation="0"
        v-for="(item, index) in contents"
        :key="index"
        :to="item.url"
      >
        <span class="text--secondary">
          {{ item.name }}
        </span>
      </v-btn>
      <v-spacer />
    </v-card-title>
  </v-app-bar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      contents: [
        { name: "About", url: "About" },
        // { name: "News", url: "News" },
        { name: "Contact", url: "Contact" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.mark:hover {
  background: linear-gradient(to top, #1d3a50 50%, transparent 50%);
  border-radius: 0;
}
/* linear-gradient(to bottom right, #1d3a50 50%, #504b79 50%) 50%, */
</style>
