/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      notomusic:{
        normal: ['Noto Music', 'sans-serif'],
      },
    },
    extend: {},
  },
  plugins: [],
}
