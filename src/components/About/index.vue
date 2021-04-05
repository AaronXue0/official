<template>
  <div>
    <desktop class="hidden-sm-and-down" />
    <mobile class="hidden-md-and-up" />
  </div>
</template>

<script>
import desktop from "@/components/About/desktop.vue";
import mobile from "@/components/About/mobile.vue";
export default {
  components: {
    desktop,
    mobile,
  },
};
</script>
