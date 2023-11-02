/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand Scale
        'brand-color-darkness': '#0065AD',
        'brand-color-dark': '#007CD6',
        'brand-color': '#0094FF', // Brand Color Principal
        'brand-color-light': '#2EA7FF',
        'brand-color-lightness': '#5CBAFF',
        'brand-color-lightner': '#8ACEFF',
        // Dark Scale
        'dark-10': '#0E131E',
        'dark-20': '#1B2838',
        'dark-30': '#AAAAAA',
        // Color System
        'support-01': '#2962FF', // Message
        'support-02': '#0BB07B', // Sucess
        'support-03': '#FFCE52', // Warning
        'support-04': '#F03D3D', // Error
        'support-05': '#E0E0E0', // Information
      },
       backgroundImage: {
        'assasins-creed': "url('/Assassins-Creed-Mirage-Review.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}