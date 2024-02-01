import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      ulg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      umd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      usm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
} satisfies Config

