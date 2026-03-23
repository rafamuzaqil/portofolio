/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0f0f0f',
        light: '#f8f8f8',
        accent: '#ff3b3b' // A bold red accent for dynamic feel
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    },
  },
  plugins: [],
}
