<template>
  <div class="about">
    <desktop />
  </div>
</template>

<script>
import desktop from "@/components/About/desktop.vue";
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
