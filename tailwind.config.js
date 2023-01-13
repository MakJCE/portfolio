/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          stroke: '#A36F33',
          '700': '#FF5E18'
        }
      },
      keyframes: {
        animateCircles: {
          '0%': { transform: 'rotate(0deg)', opacity: '0.1' },
          '50%': { transform: 'rotate(360deg)', opacity: '1' },
          '100%': { transform: 'rotate(720deg)', opacity: '0.1' }
        }
      },
      animation: {
        'circles-10': 'animateCircles 10s linear infinite',
        'circles-25': 'animateCircles 25s linear infinite',
        'circles-40': 'animateCircles 40s linear infinite'
      }
    }
  },
  plugins: []
};
