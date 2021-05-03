const plugins = require.context(
  // The relative path of the components folder
  "./plugins",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  // /\w+\.(vue|js)$/

  // /[^_]\w+\.(vue|js)$/

  /^.\/[^_]\S+\.(vue|js)$/
);

const using = function (app /*, options*/) {
  plugins.keys().forEach((name) => {
    const plugin = plugins(name).default;
    app.use(plugin);
  });
};
export default using;
