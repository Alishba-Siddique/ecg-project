/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nudista: ['"Nudista"', 'sans-serif'], // Fallback to sans-serif
        sora: ['"Sora"', 'sans-serif'], // Fallback to sans-serif
      },
      fontWeight: {
      light: 300,
      bold: 700,
    },
      colors: {
        primary: '#077761',
        secondary: '#f66205',
        accent: '#759157',
        primaryLight: '#bfdba1',
        white2: '#fdfefe',
        green2: '#015241',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'], // Disables the built-in themes provided by DaisyUI
  },
};
