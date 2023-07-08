/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-in-out',
        'fade-in': 'fade-in 2s forwards'
      },
      keyframes: {
        'slide-in-left':{
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in':{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
    },
    },
  },
  plugins: [],
}
