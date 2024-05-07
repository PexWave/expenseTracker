/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    colors: {
      'light-100': '#FFFFFF',
      'light-80': '#FCFCFC',
      'light-60': '#F1F1FA',
      'light-40': '#E3E5E5',
      'light-20': '#91919F',

      'violet-100': '#7F3DFF',
      'violet-80': '#8F57FF',
      'violet-60': '#B18AFF',
      'violet-40': '#D3BDFF',
      'violet-20': '#EEE5FF',

      'blue-100': '#0077FF',
      'blue-80': '#248AFF',
      'blue-60': '#57A5FF',
      'blue-40': '#8AC0FF',
      'blue-20': '#BDDCFF',

      'red-100': '#FD3C4A',
      'red-80': '#FD5662',
      'red-60': '#FD6F7A',
      'red-40': '#FDA2A9',
      'red-20': '#FDD5D7',

      'green-100': '#00A86B',
      'green-80': '#2AB784',
      'green-60': '#65D1AA',
      'green-40': '#93EACA',
      'green-20': '#CFFAEA',

      'yellow-100': '#FCAC12',
      'yellow-80': '#FCBB3C',
      'yellow-60': '#FCCC6F',
      'yellow-40': '#FCDDA1',
      'yellow-20': '#FCEED4'    
      
    },

  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    poppinsBold: ["PoppinsBold", "sans-serif"],
  },

  extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}