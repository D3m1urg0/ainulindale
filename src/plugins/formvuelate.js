/* eslint-disable no-unused-vars */
import { SchemaWizard, SchemaFormFactory } from "formvuelate";
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
import LookupPlugin from "@formvuelate/plugin-lookup";

import { localize, setLocale } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json";
import { configure } from "vee-validate";
import { defineRule } from "vee-validate";
import * as AllRules from "@vee-validate/rules";

// Object.keys(AllRules).forEach(rule => {
//   defineRule(rule, AllRules[rule]);
// });

configure({
  generateMessage: localize({ it }),
  validity: true,
});

setLocale("it");

const SchemaFormWithPlugins = SchemaFormFactory([
  LookupPlugin({
    mapComponents: {
      string: "form-text",
      password: "form-text",
      date: "form-text",
      mail: "form-text",
      number: "form-text",
      array: "form-select",
      radio: "form-radio-buttons",
      checkbox: "form-checkbox",
      textarea: "form-text-area",
    },
    mapProps: {
      type: "component",
    },
  }),
  VeeValidatePlugin({}),
]);

export default {
  install: function (app /*, options*/) {
    app
      .component("schema-form", SchemaFormWithPlugins)
      .component("schema-wizard", SchemaWizard);
  },
};
