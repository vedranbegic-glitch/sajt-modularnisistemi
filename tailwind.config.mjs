/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#031C2C',
          dark: '#02131F',
          surface: '#07283E',
          light: '#0E3B5A',
        },
        accent: {
          DEFAULT: '#FF6900',
          hover: '#E55E00',
          muted: '#FF8533',
        },
        slate: {
          surface: '#F1F4F6',
          border: '#D8E0E6',
          muted: '#8A99A8',
        },
      },
      fontFamily: {
        sans: [
          'Manrope',
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '6px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      letterSpacing: {
        tightest: '-0.035em',
        architectural: '0.12em',
      },
    },
  },
  plugins: [],
};