/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'local-image': "url('/src/images/2.jpg')",
    }},
  },
  plugins: [],
};
