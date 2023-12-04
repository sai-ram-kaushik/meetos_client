/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arizonia: "Arizonia",
        buenard: "Buenard"
      },
      colors: {
        background: "#FAF9F6",
        primary: "#0b131f",
        secondary: "#4fb7dd"
      }
    },
  },
  plugins: [],
}
