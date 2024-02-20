/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'input-color': '#edd000',
      },
    },
  },
  daisyui: {
    themes: ['winter', 'lemonade'],
  },
  plugins: [require('daisyui')],
};
