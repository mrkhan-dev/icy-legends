/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Berkshire: "'Berkshire Swash', serif",
        Archivo: "'Archivo', sans-serif",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(123deg, #EFD7EF 8%, #F5F9FC 39%, #F8EAE1 66%, #EAF8F9 91%)",
      },
    },
  },
  plugins: [],
};
