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
          emerald: '#0d5c3a',
          'emerald-dark': '#083d26',
          'emerald-light': '#1a7a4e',
          gold: '#c9a227',
          'gold-light': '#e8c45a',
          cream: '#faf6ef',
          sand: '#f0e6d0',
          text: '#1a1a1a',
          muted: '#6b7280',
        },
      },

      fontFamily: {
        sans: ['Nunito', 'Segoe UI', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },

      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.05)',
        glow: '0 4px 24px rgba(13,92,58,0.08)',
      },

      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-12px)',
          },
        },

        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },

  plugins: [
    function ({ addUtilities, theme }) {
      const headingFont = theme('fontFamily.heading')

      addUtilities({
        '.gold-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          color: 'transparent',
          'background-image': `linear-gradient(
            135deg,
            ${theme('colors.brand.gold')},
            ${theme('colors.brand.gold-light')}
          )`,
          'font-family': Array.isArray(headingFont)
            ? headingFont.join(', ')
            : headingFont,
        },
      })
    },
  ],
}