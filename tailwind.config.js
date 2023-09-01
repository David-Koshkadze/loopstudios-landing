/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}

