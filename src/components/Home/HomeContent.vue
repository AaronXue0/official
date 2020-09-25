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
          <div class="arrow" v-if="scrolling">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
    return {
      scrolling: true
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
