/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#5B3DF5",   // main purple
        secondary: "#A78BFA", // light purple
        accent: "#7C3AED",    // deeper purple (for gradients)
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",
      },

      // 🔥 GRADIENT COLORS (NEW)
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #5B3DF5, #A78BFA)",
      },
    },
  },
  plugins: [],
};