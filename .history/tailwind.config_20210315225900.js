module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': {'min': '1200px', 'max': '1280px'},
        '2xl': {'max': '1280px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
