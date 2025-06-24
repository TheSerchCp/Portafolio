import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#ffffff' }, // puedes cambiar el color si quieres
        },
      },
      animation: {
        typewriter: 'typewriter 2.5s steps(40) 1s 1 normal both',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [PrimeUI],
};
