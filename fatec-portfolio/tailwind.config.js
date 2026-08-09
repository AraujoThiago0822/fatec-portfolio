/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0B0D',
        carbon: '#141619',
        steel: '#24282E',
        mist: '#9AA1AC',
        paper: '#F2F1ED',
        signal: {
          DEFAULT: '#2DD4BF',
          dim: '#1AA593',
        },
        ink: {
          DEFAULT: '#FF5A4E',
          dim: '#CC4238',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}
