/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'primary-orange': 'var(--primary-orange)',
        'deep-blue': 'var(--deep-blue)',
        'dark-text': 'var(--dark-text)',
        'light-bg': 'var(--light-bg)',
      },
    },
  },
  plugins: [],
};
