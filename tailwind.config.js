/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
     "./app/**/*.{js,ts,jsx,tsx,mdx, html, css}"
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'btncolor': '#8b9298',
      'tlecolor': '#1a2340',
      'ttcolor': '#8a8e92',
      'lkcolor': '#086fb4',
      'bgsite': '#e2f2ff'
    }, 
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
    },

    animation: {
      "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      slide: "slide var(--speed) ease-in-out infinite alternate",
    },
    keyframes: {
      "spin-around": {
        "0%": {
          transform: "translateZ(0) rotate(0)",
        },
        "15%, 35%": {
          transform: "translateZ(0) rotate(90deg)",
        },
        "65%, 85%": {
          transform: "translateZ(0) rotate(270deg)",
        },
        "100%": {
          transform: "translateZ(0) rotate(360deg)",
        },
      },
      slide: {
        to: {
          transform: "translate(calc(100cqw - 100%), 0)",
        },
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}

