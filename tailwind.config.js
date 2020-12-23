module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"]
    }
  },
  plugins: [
    require("@tailwindcss/typography")
    // ...
  ]
};
