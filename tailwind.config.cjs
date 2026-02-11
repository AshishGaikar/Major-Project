/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-soft': '#dbeafe',
        accent: '#22c55e',
        success: '#16a34a',
        danger: '#ef4444',
        warning: '#f59e0b',
        background: '#f9fafb',
        'background-dark': '#020617',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [],
};


