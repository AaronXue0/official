<template>
  <v-footer fixed padless outlined max-height="80">
    <v-card class="flex" elevation="0">
      <v-card-title>
        <v-col style="position:relative;top:-17px">
          <v-row>
            <p class="Noto">Project Starry Game</p>
            <v-spacer />
            <p style="font-size: 11px;">
              © 2019 Starry Game
            </p>
            <!-- <GooglePayButton
              @payed="processPayment"
              @cancel="handleCancel"
              style="margin-right:10px;position:relative;top:10px"
            /> -->
          </v-row>
          <v-row>
            <p
              class="Noto"
              style="font-size: 11px;position: relative;top:-20px;margin-left:1px"
            >
              is a indie games team from Taipei, Taiwan.
            </p>
            <v-spacer />
            <v-btn
              color="secondary"
              v-for="(item, index) in media"
              :key="index"
              style="position:relative;top:-20px;"
              :href="item.linking"
              icon
              x-small
            >
              <v-icon dark small>{{ item.icon }}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
// import GooglePayButton from "@/components/GooglePayButton.vue";
export default {
  components: {
    // GooglePayButton
  },
  data() {
    return {
      media: [
        {
          icon: "fab fa-facebook-f",
          linking: "https://www.facebook.com/Game-Starry-109356847225732"
        },
        { icon: "mdi-twitter", linking: "https://twitter.com/projectstarry1" },
        {
          icon: "mdi-instagram",
          linking: "https://twitter.com/projectstarry1"
        }
      ]
    };
  },
  methods: {
    processPayment(paymentData) {
      // @todo pass payment token to your gateway to process payment
      //   let paymentToken = paymentData.paymentMethodData.tokenizationData.token;
      this.$router.push({
        name: "SuccessOfPayment",
        params: { paymentData: paymentData }
      });
    },
    handleCancel() {
      alert("Failled");
    }
  },
  mounted() {}
};
</script>

<style>
.payButton {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.iconColor {
  color: #1d3a50 !important;
}
</style>
