/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#11161C", 
        "primary": "#0A0F14",
        "paragraph": "#787878",
        "letters": "#EFEFEF",
        "white": "#FFFFFF",
        "blue-background": "#003ADB"
      }
    },
  },
  plugins: [],
}

