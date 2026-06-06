export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        machado: {
          bg: '#050505',
          surface: '#111111',
          red: '#D3000F',
          grey: '#B3B3B3',
          muted: '#6D6D6D',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
