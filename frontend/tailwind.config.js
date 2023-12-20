/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
    },
    colors: {
      // Configure your color palette here
      'coffee':'#9B6462',

    }
  },
  plugins: [],
}
