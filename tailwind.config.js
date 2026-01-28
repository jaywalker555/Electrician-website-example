/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          yellow: '#FBBF24',
          orange: '#F59E0B',
          blue: '#1E40AF',
          dark: '#111827',
        }
      }
    },
  },
  plugins: [],
}
