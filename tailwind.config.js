/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '868px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontFamily: {
      'serif': ['"Young Serif"', 'serif'],
      'outfit': ['"Specimen Outfit"', 'sans-serif']
    },
  },
  plugins: [],
}

