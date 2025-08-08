// tailwind.config.js
module.exports = {
  darkMode: 'class', // ou 'media' se preferir automático pelo sistema
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia'],
        times: ['"Times New Roman"'],
      },
    },
  },
  plugins: [],
  safelist: ['font-times', 'font-georgia'],
}


