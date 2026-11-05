/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#0B5D3B',
          'emerald-dark': '#073d26',
          'emerald-light': '#0F7A4B',
          gold: '#D4A437',
          'gold-light': '#E8C45A',
          'gold-dark': '#9E781B',
          cream: '#F8F5EE',
          sand: '#EFE7D8',
          text: '#1A1A1A',
          muted: '#55606E',
        },
      },

      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },

      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.05)',
        glow: '0 4px 24px rgba(11,93,59,0.08)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
    },
  },

  plugins: [],
}
