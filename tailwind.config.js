/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,  
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
}

