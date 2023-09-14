/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgCamping': "url('https://i.pinimg.com/564x/f2/3b/42/f23b422fc76eead074c59962642ee40b.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), require("daisyui"),
  ],
  
}