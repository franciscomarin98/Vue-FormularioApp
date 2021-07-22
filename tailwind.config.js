const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      emerald: colors.emerald,
      green: colors.green,
      yellow: colors.yellow,
      indigo: colors.indigo
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
