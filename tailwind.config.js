module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
