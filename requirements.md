## Packages
framer-motion | Page transitions and scroll-triggered animations
react-hook-form | Form state management
@hookform/resolvers | Zod validation resolver for forms
lucide-react | Icons

## Notes
Tailwind Config - extend fontFamily and colors:
```js
// Add to tailwind.config.ts extend:
fontFamily: {
  sans: ["var(--font-sans)"],
  display: ["var(--font-display)"],
},
colors: {
  ivory: {
    DEFAULT: "#FAF7F2",
    stone: "#F3EDE4",
  },
  ink: {
    DEFAULT: "#1A1A1A",
    muted: "#5C554D",
  },
  bordeaux: {
    DEFAULT: "#6B2D3E",
    muted: "rgba(107, 45, 62, 0.8)",
  },
  gold: {
    DEFAULT: "#9E8A5F",
    divider: "rgba(158, 138, 95, 0.2)",
  }
}
