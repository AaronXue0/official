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
        primary: "#ffffff"
      },
      dark: {
        primary: "#000000"
      }
    }
  }
});

export default vuetify;
