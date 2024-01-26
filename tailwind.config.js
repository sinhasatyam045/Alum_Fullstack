/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' if you want to use the OS color scheme
  theme: {
    extend: {
      colors: {
        button: {
          DEFAULT: "#000000", // Replace with your desired button color
          hover: "#1f4a86", // Replace with your desired hover color
        },
        textColor: {
          white: "#ffffff", // Add the white text color
        },
        backgroundColor: {
          darkblue: "#1e1b4b",
        },
      },
      borderRadius: {
        DEFAULT: "0.25rem", // Replace with your desired border radius value
      },
      textColor: {
        white: "#ffffff", // Add the white text color
      },
    },
  },
  plugins: [],
};
