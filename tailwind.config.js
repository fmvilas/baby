const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      scale: {
        '30': '.30',
        '40': '.40',
        '60': '.60',
      },
      opacity: {
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      rotate: {
        '-10': '-10deg'
      },
    },
  },
  variants: {
    textColor: ['dark', 'responsive', 'hover', 'focus'],
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    opacity: ['dark', 'responsive', 'hover', 'focus']
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return `.scheme-dark .dark${e(separator)}${selector.substr(1)}`
        })
      })
    })
  ],
}
