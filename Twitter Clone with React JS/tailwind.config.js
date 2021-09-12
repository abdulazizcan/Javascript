// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        basis: {
        Blue: "hsl(203, 89%, 53%)",
        darkBlue: "hsl(203, 89%, 46%)",
        lightBlue: "hsl(203, 89%, 96%)",
      },
      grayColors: {
        dark:"#657786",
        light:"#AAB8C2",
        lightPlus:"#E1E8ED",
        light2Plus:"#F5F8FA",
      },
      darkestBlack:"#14171A",
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
