<template>
  <v-main style="margin-top:20px">
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-img
            :src="require('@/assets/kapong.png')"
            max-width="600"
            style="opacity:0.9;"
          >
          </v-img>
          <v-img
            :src="require('@/assets/lomo.jpg')"
            max-width="520"
            style="opacity:0.5;position:relative;top:-300px;left:200px;"
          >
          </v-img>
          <div
            class="Noto"
            style="position:relative;top:-100px;left:1000px;top:-200px;margin-bottom:-1000px"
          >
            <span style="font-size:16px">Almost there....</span>
            <v-icon class="spinner" style="margin-left:10px"
              >mdi-gamepad</v-icon
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
