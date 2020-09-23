<template>
  <v-footer fixed padless outlined rounded max-height="100">
    <v-card class="flex">
      <v-card-title>
        <v-col>
          <v-row>
            <p class="Zpix">Donate Us</p>
            <v-spacer />
            <GooglePayButton style="margin-right:10px" />
          </v-row>
          <v-row>
            <p
              class="Noto"
              style="font-size: 10px;position: relative;top:-20px;margin-left:1px"
            >
              Price $1.00USD
            </p>
          </v-row>
        </v-col>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import GooglePayButton from "@/components/GooglePayButton.vue";
export default {
  components: {
    GooglePayButton
  },
  data() {
    return {};
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
</style>
