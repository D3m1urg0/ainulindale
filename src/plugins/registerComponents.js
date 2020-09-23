import kebabCase from "lodash/kebabCase";

const requireComponent = require.context(
  // The relative path of the components folder
  "../components",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /(^|\/)App[A-Z]\S+\.(vue|js)$/
);

const register = function(app /*, options*/) {
  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = kebabCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    );

    // Register component globally
    app.component(
      componentName,
      // Look for the component options on `.default`, which will
      // exist if the component was exported with `export default`,
      // otherwise fall back to module's root.
      componentConfig.default || componentConfig
    );
  });
};
export default register;
