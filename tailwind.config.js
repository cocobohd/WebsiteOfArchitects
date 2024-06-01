/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-text': '#BDBDBD',
        'light-gray': '#E5E5E5',
        'dark-gray': '#333',
        'background-gray': '#2C2C2C',
      },
    },
  },
  plugins: [],
};
