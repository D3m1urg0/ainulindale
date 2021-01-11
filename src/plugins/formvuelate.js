/* eslint-disable no-unused-vars */
import { SchemaWizard, SchemaFormFactory } from "formvuelate";
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
import LookupPlugin from "@formvuelate/plugin-lookup";

import { localize } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json";

const SchemaFormWithPlugins = SchemaFormFactory([
  LookupPlugin({
    mapComponents: {
      string: "FormText",
      array: "FormSelect"
    }
  }),
  VeeValidatePlugin({
    // plugin configuration here
    generateMessage: localize({
      it
    }),
    classes: {
      valid: "is-valid",
      invalid: "is-invalid",
      dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
    }
  })
]);

Plugin.install = function(app /*, options*/) {
  app
    .component("schema-formx", SchemaFormWithPlugins)
    .component("schema-wizard", SchemaWizard);
};

export default Plugin;
