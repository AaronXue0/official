<template>
  <v-app>
    <HeadList style="Noto" />
    <v-container style="position:relative;top:-100px">
      <v-row>
        <v-col>
          <v-carousel hide-delimiters :show-arrows="false">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}
.payButton {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
.carousel-item img {
  height: 100vh !important ;
}
</style>
