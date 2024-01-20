/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: false,
    },
    extend: {
      colors: {
        clifford: '#da373d',
        myback: '#0F172A',
        mySecColor: '#1E293B',
        hoverColor: '#38BDF8',
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
