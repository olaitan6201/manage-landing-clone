/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        danger: 'hsl(12, 88%, 59%)',
        dangerLight: 'hsl(12, 88%, 69%)',
        dangerWhite: 'hsl(12, 88%, 95%)',
        info: 'hsl(228, 39%, 23%)',
        infoDark: 'hsl(227, 12%, 61%)',
        primary: 'hsl(233, 12%, 13%)',
        bright: 'hsl(13, 100%, 96%)',
        secondary: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
