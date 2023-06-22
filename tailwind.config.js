/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3772FF',
        dark: {
          10: '#0C0C0C',
          20: '#737373',
          30: '#EBEBEB',
          40: '#F9F9F9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        padding: '1rem',
        screens: {
          xl: '1228px',
          '2xl': '1228px',
        }
      }
    },
  },
  plugins: [],
}
