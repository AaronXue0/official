<template>
  <v-footer fixed padless outlined max-height="100">
    <v-card class="flex">
      <v-card-title>
        <v-col>
          <v-row>
            <p class="Zpix">Donate Us</p>
            <v-spacer />
            <GooglePayButton
              @payed="processPayment"
              @cancel="handleCancel"
              style="margin-right:10px;position:relative;top:10px"
            />
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
</style>
