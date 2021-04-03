<template>
  <v-container class="Noto">
    <v-row justify="center" align="center">
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 0" width="400">
          <v-img
            :src="require('@/assets/escape.png')"
            max-width="1080"
            :style="hover ? 'opacity:1' : 'opacity:0.8'"
          >
          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 0"
          width="400"
          style="position:reative;left:-100px;top:100px"
        >
          <v-img
            :src="require('@/assets/SOBCG.png')"
            max-width="1080"
            :style="hover ? 'opacity:1' : 'opacity:0.8'"
            @click="overlay = true"
          >
          </v-img>
        </v-card>
      </v-hover>
    </v-row>
    <v-row justify="end" align="end">
      <v-col cols="7">
        <div class="arrow" v-if="scrolling">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="3">
        <div style="position:relative;top:200px">
          <span style="font-size:16px">Almost there....</span>
          <v-icon class="spinner">mdi-gamepad</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      scrolling: true,
      overlay: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) this.scrolling = false;
      else this.scrolling = true;
    }
  },
  mounted() {
    if (window.scrollY > 0) this.scrolling = false;
    else this.scrolling = true;
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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

/* Scroll Effect */
.arrow {
  position: absolute;
  z-index: 100;
  left: 70%;
  top: 400px;
}
.arrow span {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 5px solid #0a3c57;
  border-right: 5px solid #0a3c57;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
