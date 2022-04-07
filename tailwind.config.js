const colors = {
  'primary' : '#f72119',
  'primary-dark' : '#3d0808',
  'secondary' : '#ffffff',
  'secondary-dark' : '#efefef',
  'tertiary' : '#020202',
  'tertiary-light' : '#121212',
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Vim'],
      'body': ['Cairo']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      ...colors
    }),
    textColor: theme => ({
      ...theme('colors'),
      ...colors
    }),
    borderColor: theme => ({
      ...theme('colors'),
      ...colors 
    }),
    extend: {
      maxWidth: {
        'screen-3xl': '1920px',
        '8xl': '1440px'
      },
      height: {
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
        'screen-1/2': '50vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}