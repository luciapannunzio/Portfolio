/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        formula: ['Formula', 'sans-serif'],
        neue: ['NeueMontreal', 'sans-serif'],
      },
      colors: {
        background: 'rgb(255, 248, 241)',
      }
    },
  },
  plugins: [],
}