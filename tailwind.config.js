/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        fontFamily: {
          formula: ['Formula', 'sans-serif'],
          neuemontreal: ['NeueMontreal', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  