/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwind-datetime-picker/dist/index.esm.mjs',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
    colors: {
      primary: '#1e2d3d',
      primaryDark: '#141e29',
      secondary: '#03b8d4',
      secondaryDark: '#024954',
    },
  },
  plugins: [require('flowbite/plugin')],
}
