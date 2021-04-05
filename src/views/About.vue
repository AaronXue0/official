<template>
  <div class="about">
    <index />
  </div>
</template>

<script>
import index from "@/components/About/index.vue";
export default {
  components: {
    index,
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
