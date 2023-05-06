/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors :{
        'Primary':'#03B4BA',
        'Secundary':'#305A5E',
        'Tertiary':'#162F34',
        'Quaternary':'#121D21',
        'MainBg':'#AA9D9A'
      },
      fontFamily:{
        Poppins:['var(--font-poppins)'],
        ChakraPetch:['var(--font-chakra-petch)']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
