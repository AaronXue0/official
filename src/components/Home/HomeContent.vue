<template>
  <v-app>
    <HeadList style="Noto" />
    <v-container style="position:relative;top:-100px;margin-down:-100px">
      <v-row>
        <v-col>
          <v-img
            :src="require('@/assets/kapong.png')"
            max-width="600"
            style="opacity: 1;position:relative;top:-500px;left:100px;margin-bottom:-300px;margin-right:auto"
          >
          </v-img>
          <v-img
            :src="require('@/assets/lomo.jpg')"
            max-width="500"
            style="opacity: 0.5;position:relative;top:-500px;left:300px;margin-bottom:-300px;margin-right:auto"
          >
          </v-img>
        </v-col>
      </v-row>
      <div
        style="position:relative;top:-150px;left:1000px;margin-bottom:-300px"
        class="Noto"
      >
        <span style="font-size:16px">Almost there....</span>
        <v-icon class="spinner" style="margin-left:10px">mdi-gamepad</v-icon>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import HeadList from "@/components/Home/HeadList.vue";
export default {
  components: {
    HeadList
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
.spinner {
  transform: rotate(45deg);
  animation: crescendo 1.5s alternate infinite ease-in;
}

@keyframes crescendo {
  0% {
    transform: scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.3;
  }
}
</style>
