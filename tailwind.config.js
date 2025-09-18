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
      keyframes: {
        flip: {
          '0%': { transfoorm: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },          
        },
      },
      animation: {
        flip: 'flip 0.6s infinite', // Adjust duration and timing as needed
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
  safelist: ['font-times', 'font-georgia'],
}


