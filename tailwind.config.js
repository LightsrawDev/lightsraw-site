/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        yellow: {
          400: '#FFD700',
          300: '#FFED4A',
          500: '#FFC107',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [],
};