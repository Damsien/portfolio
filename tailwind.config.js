/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM sans"', 'sans-serif'],
        'karla': ['Karla', 'sans-serif'],
        'roboto': ['"Roboto Mono"', 'monospace']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}