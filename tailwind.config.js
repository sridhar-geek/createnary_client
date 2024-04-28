/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f8f9fb",
        primary: "#4a508e",
        primary_text: "#11151d",
        secondary_text: "#d6d6d6",
        secondary_text1: "#ccc",
        secondary_text_alt: "#404040",
        neutral_grey: "#dddce0",
        gray: {
          100: "rgba(17, 21, 29, 0.4)",
          200: "rgba(17, 21, 29, 0.08)",
        },
        steelblue: "#7075b5",
        gainsboro: "#dee0e0",
        white: "#fff",
        glassy: "#dddddd",
        glass: "rgba(214, 214, 214, 0.4)",
      },
      fontFamily: {
        urbanist: "Urbanist",
        monoton: ["Monoton"],
        Poppins : 'Poppins'
      },
    },
  },
  plugins: [],
};

