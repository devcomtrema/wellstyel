/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{jsx,tsx}', './components/**/*.{jsx,tsx}', './hooks/**/*.{js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-green': '#0FA958',
        'brand-green-dark': '#16E07B',
        'brand-gold': '#C68A2D',
        'brand-gold-dark': '#E0A93B',
        'dark-bg': '#0B0B0D',
        'dark-card': '#16181C',
        'light-text': '#1A1A1A',
        'dark-text': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(145deg, #E0A93B, #C68A2D)',
      },
    },
  },
  plugins: [],
}
