module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': {'min': '1200px', 'max': '1280px'},
        '2xl': {'max': '1280px'},
      },
      maxWidth: {
        'mobile': '360px',
      },
      height: {
        '112': '448px',
        '128': '512px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
