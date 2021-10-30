module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nuto: ['Nunito Sans', 'sans - serif'],
      },
      fontWeight: {
        light: 300,
        normal: 600,
        medium: 800,
      },

      boxShadow: {
        normal:
          '-1px -1px 1px 2px rgba(0, 0, 0, 0.06), 1px 1px 1px 1px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
