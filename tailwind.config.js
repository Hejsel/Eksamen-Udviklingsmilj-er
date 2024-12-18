/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // './src/pages/**/*.{html,js}', // Indsæt dine HTML- og JS-filer her
    // './src/index.html',
    // './src/pages/opg-1_git.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#42000C", // Mørk rød
        primary: "#E8F1E0", // Lys grønlig hvid
        accent: "#FF4014", // Kraftig rød-orange
        highlight: "#FF6B00", // Lys orange
      },
      spacing: {
        "20pct": "20%", // Eksempel spacing som clamp
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};
