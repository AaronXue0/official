<template>
  <v-card elevation="0" class="Noto" height="100">
    <v-row align="start" justify="center">
      <v-col>
        <v-row justify="center">
          <v-icon color="#1de9b6" class="mx-2" size="100">
            mdi-check-circle-outline
          </v-icon>
        </v-row>
        <br />
        <p class="text-center">
          Order Completed Successfully!
        </p>

        <br v-for="i in 2" :key="i" />
        <p v-if="description" class="text-center">
          Your {{ description }} with Google Pay <br />
          was successfully charged.
        </p>
        <p v-if="description" class="text-center">
          Check your email for your recipt!
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      paymentData: null,
      description: "xxx"
    };
  },
  methods: {},
  mounted() {
    this.paymentData = this.$route.params;
    //this.description = this.paymentData.paymentMethodData.description;
    this.description = Object.values(
      this.paymentData
    )[0].paymentMethodData.description;
  }
};
</script>
