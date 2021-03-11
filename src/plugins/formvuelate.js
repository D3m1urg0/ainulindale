/* eslint-disable no-unused-vars */
import { SchemaWizard, SchemaFormFactory } from "formvuelate";
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
import LookupPlugin from "@formvuelate/plugin-lookup";

import { localize, setLocale } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json";
import { configure } from "vee-validate";
import { defineRule } from "vee-validate";
import * as AllRules from "@vee-validate/rules";

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ it }),
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
    dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
***REMOVED***
});

setLocale("it");

const SchemaFormWithPlugins = SchemaFormFactory([
  VeeValidatePlugin({}),
  LookupPlugin({
    mapComponents: {
      string: "FormText",
      array: "FormSelect"
  ***REMOVED***
***REMOVED***)
]);

***REMOVED***
***REMOVED***
    app
      .component("schema-form", SchemaFormWithPlugins)
      .component("schema-wizard", SchemaWizard);
***REMOVED***
***REMOVED***
