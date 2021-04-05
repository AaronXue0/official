<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="7">
        <v-card elevation="0" width="550" @click="push('Escape')">
          <v-img :src="require('@/assets/escape.png')" max-width="550"> </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="7">
        <v-card elevation="0" width="550" @click="push('SOB')">
          <v-img :src="require('@/assets/SOBCG.png')" max-width="550"> </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: {
        infinite: true,
        slidesToShow: 3,
        navButtons: false,
        dots: false,
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.slide {
  display: block;
  height: 500px;
  object-fit: cover;
  width: 100%;
}
</style>
