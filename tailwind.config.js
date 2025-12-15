/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#A020F0',
      },
      fontFamily: {
        mono: ['monospace', 'Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

