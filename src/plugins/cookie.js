import { VueCookieNext } from "vue-cookie-next";

export default {
  install: function(app /*, options*/) {
    app.use(VueCookieNext);
  }
};

// set default config
VueCookieNext.config({ expire: "Infinity" });
