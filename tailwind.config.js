module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela"],
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
