import Multiselect from "@suadelabs/vue3-multiselect";
export default {
  install: function(app /*, options*/) {
    app.component("multiselect", Multiselect);
  }
};
