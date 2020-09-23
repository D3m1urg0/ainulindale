import { ValidationProvider, ValidationObserver, extend } from "vee-validate";

import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/it.json";

Plugin.install = function(app /*, options*/) {
  Object.keys(rules).forEach(rule => {
    extend(rule, {
      ...rules[rule], // copies rule configuration
      message: messages[rule] // assign message
    });
  });

  // Add a rule.
  // extend('secret', {
  //   validate: value => value === 'example',
  //   message: 'This is not the magic word'
  // });

  // Register it globally
  app
    .component("ValidationProvider", ValidationProvider)
    .component("ValidationObserver", ValidationObserver);
};

export default Plugin;
