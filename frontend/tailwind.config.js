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
      screens: {
        largestLaptop: '2560px',
        mediumLaptop: '1440px',
      },
      backgroundImage: {
        'animation-bg': "url('../assets/images/animationBg.png')",
        'animation-bg': "url('../assets/images/animationBg.png')",
      },
      colors: {
        primary: '#077761',
        secondary: '#FF8D2A',
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
