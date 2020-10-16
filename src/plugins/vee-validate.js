import { Field, Form, ErrorMessage } from "vee-validate";

import { defineRule, configure } from "vee-validate";
import * as rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json";

Plugin.install = function(app /*, options*/) {
  configure({
    generateMessage: localize({
      it
    })
  });

  /* Dettagliare */
  Object.keys(rules).forEach(rule => {
    defineRule(rule, rules[rule]);
  });

  app
    .component("v-field", Field)
    .component("v-form", Form)
    .component("error-message", ErrorMessage);
};

export default Plugin;
