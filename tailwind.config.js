/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        gray: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
          600: '#3D3D3D',
          500: '#5A5A5A',
          400: '#888888',
          300: '#BBBBBB',
          200: '#D3D3D3',
          100: '#EEEEEE',
        },
        indigo: {
          900: '#1E1B4B',
          800: '#283593',
          700: '#303F9F',
          600: '#3949AB',
          500: '#5C6BC0',
          400: '#7986CB',
          300: '#9FA8DA',
          200: '#C5CAE9',
          100: '#E8EAF6',
        },
      },
      boxShadow: {
        'jp': '4px 4px 0 0 rgba(92, 107, 192, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};