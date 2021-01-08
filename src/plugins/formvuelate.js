/* eslint-disable no-unused-vars */
import { SchemaWizard, SchemaFormFactory } from "formvuelate";
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
import LookupPlugin from "@formvuelate/plugin-lookup";

import { localize } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json";

const SchemaFormWithValidation = SchemaFormFactory([
  LookupPlugin({
    mapComponents: {
      string: "FormText",
      array: "FormSelect"
  ***REMOVED***
***REMOVED***),
  VeeValidatePlugin({
    // plugin configuration here
    generateMessage: localize({
      it
  ***REMOVED***),
    classes: {
      valid: "is-valid",
      invalid: "is-invalid",
      dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
  ***REMOVED***
***REMOVED***)
]);

Plugin.install = function(app /*, options*/) {
  app
    .component("schema-form", SchemaFormWithValidation)
    .component("schema-wizard", SchemaWizard);
***REMOVED***

export default Plugin;
