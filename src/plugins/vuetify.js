import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify, {
  iconfont: "fa"
});

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#ffffff"
      },
      dark: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#000000"
      }
    }
  }
});

export default vuetify;
