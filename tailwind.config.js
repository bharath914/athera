/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EF',
        bone: '#EFEBE3',
        linen: '#E4DED3',
        ink: '#171614',
        graphite: '#3B3833',
        mute: '#7C766C',
        rule: '#D9D2C6',
        clay: '#9C5B3C',
        moss: '#5E6650',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        edge: '96rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
