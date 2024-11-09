/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        gray: {
          1: "#F9F6FD",
          2: "#F0F2F5",
          3: "#6F757C",
        },
      },
      fontFamily: {
        sora: ["Sora, sans-serif"],
        rubik: ["Rubik, sans-serif"],
      },
    },
  },
  plugins: [],
};
