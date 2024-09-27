/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nudista: ['"Nudista"'],
        nudistaLight: ['"NudistaLight"'],
        sora: ['"Sora"'],
      },
      colors: {
        primary: '#01765f',
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
