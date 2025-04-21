/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: {
          900: '#1a1a1a',
          800: '#333333',
          700: '#4d4d4d',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#b3b3b3',
          200: '#cccccc',
          100: '#e6e6e6',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
