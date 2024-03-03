/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "rotating-border":
          "conic-gradient(from var(--a),transparent,transparent,transparent,blue,transparent,transparent,transparent)",
      },
      keyframes: {
        spinCustomAngle: {
          "0%": { "--a": "0deg" },
          "100%": { "--a": "360deg" },
        },
        "fade-in": {
          "0%": { opacity: 0, display: "none" },
          "100%": { opacity: 1, display: "block" },
        },
        "fade-out": {
          "0%": { opacity: 1, display: "block" },
          "100%": { opacity: 0, display: "none" },
        },
      },
    },
  },
  plugins: [],
};
