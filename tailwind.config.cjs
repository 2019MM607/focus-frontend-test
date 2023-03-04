/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: '#0F0F0F',
      textPrimary: '#1f2937',
      textWhite: '#FFFFFF',
      red: '#dc2626',
      from: '#b91c1c',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [],
};
