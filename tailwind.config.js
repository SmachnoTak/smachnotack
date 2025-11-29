import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#046E9E",
        darkBlue: "#142A36",
      },
    },
  },
  safelist: ["text-brandBlue", "text-darkTextBlue"],
  plugins: [],
});
