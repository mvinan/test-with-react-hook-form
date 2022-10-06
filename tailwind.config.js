module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/views/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
