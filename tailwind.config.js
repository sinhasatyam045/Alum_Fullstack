/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' if you want to use the OS color scheme
  theme: {
    screens:{
      'view':'911px',
    },
    extend: {
      colors: {
        blue: "#204C89",
        followBtn: "#0500FF",
        lightgray: "#F5F5F5",
        gray: "#D9D9D9",
        white: "#ffffff",
        commentblue: "#0064FF", // Add the white text color directly under colors
      },
      backgroundColor: {
        darkblue: "#1e1b4b",
      },
      borderRadius: {
        DEFAULT: "0.25rem", // Replace with your desired border radius value
      },
    },
  },
  plugins: [],
};
