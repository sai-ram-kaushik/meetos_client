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
     colors: {
      background: "#FCEED5",
      primary: "#FFF",
      secondary: "#003459"
     },

     fontFamily: {
      title: "Yeseva One",
      heading: "Gilda Display",
      bodyContent: "Poppins"
     }
    },
  },
  plugins: [],
}
