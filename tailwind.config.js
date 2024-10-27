/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1360px'
    },
    extend: {
      colors: {
        'vivid-blue': '#0D50FF',
        'charcoal-gray': '#282828',
        'medium-gray': '#8B8B8B',
        'whisper-gray': '#F1F3F4',
        'light-gray': '#DDDDDD'
      },
      container: {
        center: true
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
  safelist: ['[&::-webkit-scrollbar]:hidden']
};
