/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          start: '#e65100',
          mid:   '#d84315',
          end:   '#ff8800',
          DEFAULT: '#e65100'
        },
        accent: {
          DEFAULT: '#e65100',
          mid:     '#d84315',
          deep:    '#b71c1c',
        },
        bg: {
          base:    '#faf7f2',
          surface: '#f3efe6',
          surface2:'#eae3d5',
        },
        clay: {
          black: '#1c1917',
          white: '#ffffff',
          gray:  '#524d46',
          cream: '#faf7f2'
        },
        glass: {
          dark:  'rgba(28, 25, 23, 0.05)',
          light: 'rgba(255, 255, 255, 0.6)',
          cream: 'rgba(250, 247, 242, 0.85)',
        }
      },
      fontSize: {
        'hero':      ['clamp(4rem, 15vw, 15rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'section':   ['clamp(2.5rem, 8vw, 6rem)',  { lineHeight: '0.9',  letterSpacing: '-0.03em' }],
        'manifesto': ['clamp(1.5rem, 4vw, 3rem)',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }]
      }
    }
  },
  plugins: [],
}
