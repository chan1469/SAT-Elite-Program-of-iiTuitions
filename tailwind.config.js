/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bccaff',
          300: '#8da5ff',
          400: '#5b74ff',
          500: '#3949ff',
          600: '#2331ff',
          700: '#141eed',
          800: '#1419d1',
          900: '#131aa7',
          950: '#0f1159',
        },
        accent: {
          50: '#fdf8e9',
          100: '#fbefc6',
          200: '#f8df90',
          300: '#f5ca4f',
          400: '#f3b722',
          500: '#e69814',
          600: '#c7740f',
          700: '#a35410',
          800: '#864215',
          900: '#723817',
          950: '#411b09',
        },
        navy: {
          950: '#0a0e25',
          900: '#0f1645',
          800: '#131c60',
          700: '#182480',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};