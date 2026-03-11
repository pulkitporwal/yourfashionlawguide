/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        background: "hsl(40, 26%, 96%)",
        foreground: "hsl(0, 0%, 10%)",
        muted: "hsl(36, 33%, 92%)",
        "muted-foreground": "hsl(32, 9%, 33%)",
        primary: "hsl(344, 41%, 30%)",
        "primary-foreground": "hsl(0, 0%, 100%)",
        secondary: "hsl(41, 25%, 50%)",
        "secondary-foreground": "hsl(0, 0%, 100%)",
        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(0, 0%, 10%)",
        border: "hsl(41, 25%, 85%)",
        input: "hsl(41, 25%, 85%)",
        ring: "hsl(344, 41%, 30%)",
      },
      borderRadius: {
        lg: "0",
        md: "0",
        sm: "0",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
