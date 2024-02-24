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
      keyframes: {
        rotate: {
          "0%": {
            transform: "translate(-50%,-50%) scale(1.4) rotate(0turn)",
          },
          "100%": {
            transform: "translate(-50%,-50%) scale(1.4) rotate(1turn)",
          },
        },
        spin: {
          "0%": { rotate: "0deg" },
          "15%,35%": { rotate: "90deg" },
          "65%,85%": { rotate: "270deg" },
          "100%": { rotate: "360deg" },
        },
        slide: {
          "100%": {
            translate: "calc(100cqw - 100%) 0",
          },
        },
        flip: {
          "100%": {
            rotate: "360deg",
          },
        },
      },
    },
  },
  plugins: [],
};
