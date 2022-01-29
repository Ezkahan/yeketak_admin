module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-medium': ["Montserrat-Medium"],
        'montserrat-bold': ["Montserrat-Bold"],
      },
      colors: {
        gray: {
          750: "#303947",
        },
      },
    },
  },
  plugins: [],
};
