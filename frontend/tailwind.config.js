/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        insta: {
          purple: '#833ab4',
          pink: '#c13584',
          magenta: '#e1306c',
          red: '#fd1d1d',
          orange: '#f77737',
          yellow: '#fcaf45',
          gold: '#f09433',
          berry: '#bc1888',
        },
        dark: {
          bg: '#120c18',
          card: '#1a1024',
          surface: '#221430',
          border: 'rgba(225, 48, 108, 0.2)',
          glow: 'rgba(225, 48, 108, 0.25)',
        },
        cyber: {
          blue: '#f77737',
          cyan: '#fcaf45',
          purple: '#833ab4',
          violet: '#c13584',
          pink: '#e1306c',
          neon: '#fd1d1d',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'insta-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        'insta-sunset': 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #f09433 0%, #dc2743 50%, #833ab4 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 210, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(121, 40, 202, 0.7))' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-blue': '0 0 20px rgba(0, 210, 255, 0.4)',
        'neon-purple': '0 0 20px rgba(121, 40, 202, 0.4)',
        'neon-cyan': '0 0 25px rgba(0, 242, 254, 0.5)',
      }
    },
  },
  plugins: [],
}
