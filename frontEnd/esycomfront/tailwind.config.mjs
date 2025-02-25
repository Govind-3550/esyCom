/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      screens: {
        'xl': '1440px', // Custom screen size for 1440px
      },
      fontFamily: {
        custom: ['YourFontName', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
