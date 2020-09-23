<template>
<v-app>

</v-app>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
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
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
