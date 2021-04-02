const Color = require("color");
const lighen = (clr, val) =>
  Color(clr)
    .lighten(val)
    .rgb()
    .string();
const darken = (clr, val) =>
  Color(clr)
    .darken(val)
    .rgb()
    .string();

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E55600",
          light: lighen("#E55600", 0.1),
          dark: darken("#E55600", 0.1)
        },
        secondary: {
          DEFAULT: "#1e3a8a",
          light: lighen("#1e3a8a", 0.1),
          dark: darken("#1e3a8a", 0.1)
        }
      }
    },
    variants: {
      extend: {}
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio")
    // ...
  ]
};
