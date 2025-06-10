/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // синій
        secondary: '#F1F5F9', // світло-сірий
        accent: '#A5B4FC', // пастельний синій
        background: '#F8FAFC', // майже білий
        card: '#FFFFFF',
        muted: '#64748B', // сірий для тексту
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(0,0,0,0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
} 