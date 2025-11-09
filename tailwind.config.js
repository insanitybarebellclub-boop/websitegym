/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0a0f',
          darker: '#050507',
          light: '#1a1a2e',
        },
        accent: {
          neon: '#39ff14',
          cyan: '#00ffff',
          pink: '#ff1b7e',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14',
          },
          'to': {
            textShadow: '0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14, 0 0 50px #39ff14, 0 0 60px #39ff14',
          },
        },
        slideIn: {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(57, 255, 20, 0.5)',
        'neon-strong': '0 0 30px rgba(57, 255, 20, 0.8)',
        'pink-glow': '0 0 20px rgba(255, 27, 126, 0.5)',
        'cyan-glow': '0 0 20px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

