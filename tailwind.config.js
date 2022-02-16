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
  darkMode: false, // or 'media' or 'class'
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}