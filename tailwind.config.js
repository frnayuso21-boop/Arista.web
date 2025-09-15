/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary gradient colors matching the background
        'gradient-blue-start': '#0066FF',
        'gradient-blue-light': '#0080FF', 
        'gradient-blue-mid': '#0099FF',
        'gradient-royal': '#4169E1',
        'gradient-slate': '#6A5ACD',
        'gradient-violet': '#8A2BE2',
        'gradient-orchid': '#9932CC',
        'gradient-purple-end': '#BA55D3',
        
        // Semantic color pairs for consistent theming
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main blue
          600: '#0066FF', // Gradient start
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff', 
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Main purple
          600: '#9932CC', // Gradient end
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0066FF 0%, #0080FF 15%, #0099FF 30%, #4169E1 45%, #6A5ACD 60%, #8A2BE2 75%, #9932CC 90%, #BA55D3 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0066FF 0%, #4169E1 50%, #6A5ACD 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6A5ACD 0%, #8A2BE2 50%, #BA55D3 100%)',
        'gradient-light': 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
      }
    },
  },
  plugins: [],
};
