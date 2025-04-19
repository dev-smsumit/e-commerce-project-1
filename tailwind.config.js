/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        black_363738: 'var(--black_363738)',
        white_f5f5f5: 'var(--white_f5f5f5)',
        white_fefaf1: 'var(--white_fefaf1)',
        text_white: 'var(--text_white)',
        text_black: 'var(--text_black)',
        red_db4444: 'var(--red_db4444)',
        button_00ff66: 'var(--button_00ff66)',
        hover_e07575: 'var(--hover_e07575)',
        hover_a0bce0: 'var(--hover_a0bce0)',
      }
    },
    fontFamily: {
      poppins: 'var(--poppins_font)',
      inter: 'var(--inter_font)',
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

