/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hedera: {
          blue: '#165D9E',
          navy: '#203A5F',
          black: '#000000',
          white: '#FFFFFF',
          silver: '#EAEAEA',
          gray: '#737373',
          cyan: '#00FFFF', // Allowed for neon glow
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.2)',
        'glow-blue': '0 0 20px rgba(22, 93, 158, 0.6), inset 0 0 10px rgba(22, 93, 158, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '.7', filter: 'brightness(1.5)' },
        }
      }
    },
  },
  plugins: [],
}
