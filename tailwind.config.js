/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-seconary' : '#19376d',
        'card-color': '#333333',
        'form-background':'#50404D',
        'form-radius':'#080706',
        'btn-bg':'rgb(128,0,128)',
        'cnt-card-bg':'#130f2a',
        'cnt-card-br':'#6751b9'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
}

