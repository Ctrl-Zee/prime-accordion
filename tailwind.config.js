/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#024832",
        "primary-dark": "#002C1E",
        "primary-teal": "#499890",
        "primary-green-light": "#D3E5E3",
        "base-text": "#495057",
        "secondary-text": "#6c757d",
      },
    },
  },
  plugins: [],
};
