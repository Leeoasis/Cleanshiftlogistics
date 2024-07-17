module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tang: ["Tangerine", "serif"],
        ice: ["Iceberg", "sans-serif"],
        nosi: ["Nosifer", "sans-serif"],
      },
      colors: {
        'dark-blue': '#f7fafc',
      },
    },
  },
  plugins: [],
}
