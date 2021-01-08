module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
***REMOVED***,
  variants: {
    extend: {
      fontWeight: ["hover", "focus"]
  ***REMOVED***
***REMOVED***,
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")

    // ...
  ]
***REMOVED***
