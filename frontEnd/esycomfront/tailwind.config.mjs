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
        jakarta: ['Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 10s linear infinite', // Customize duration and speed
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translate3d(100%, 0, 0)', // Start from right
          },
          '100%': {
            transform: 'translate3d(-100%, 0, 0)', // End at left
          },
        },
      },
    },
  },
  plugins: [],
};
