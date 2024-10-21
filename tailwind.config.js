/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#003459',
        'footerBg': '#FCEED5',
        'gray': '#667479'
      },
      fontFamily: {
        'sfpro': ['SF Pro Display', 'sans-serif'],
        'gillroy': ['SVN-Gilroy', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'notoGeorgian': ['Noto Sans Georgian', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']

      },
      screens: {
        '2md': '930px',
        'xs': '500px'

      },
      backgroundImage: {
        'hero-banner': "url('/src/assets/HeroBanner.png')",
      },
      gridTemplateColumns: {
        'undeLargeDevice': 'repeat(auto-fill, minmax(230px, 1fr))',
        'aboveLargeDevice': 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
}

