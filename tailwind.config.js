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
        'night': '#0B1222',
        'gold': '#B08D57',
        'ink': '#1d2540',
        'cloud': '#F6F7F8',
        'paper': '#FAFAFA',
        'panel': '#F4F4F4',
        'navy': '#0E1E3A',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
