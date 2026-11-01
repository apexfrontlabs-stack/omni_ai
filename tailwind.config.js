/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oatmeal: "#F5F2EB",
        slateCharcoal: "#1E2229",
        deepSpruce: "#1E352F",
        softMint: "#E2EFE9",
        cyberMint: "#00F5A0",
        amber: "#F59E0B",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};