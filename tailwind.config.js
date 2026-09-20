/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // COS-like: white, black, one grey. Photography carries the colour.
      colors: {
        paper: '#FFFFFF',
        bone: '#F5F4F2',
        linen: '#ECEAE6',
        ink: '#111111',
        graphite: '#222222',
        mute: '#767676',
        rule: '#E4E2DE',
        clay: '#111111',
        moss: '#5E6650',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
        label: '0.06em',
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
