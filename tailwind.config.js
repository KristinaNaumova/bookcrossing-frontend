/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'xs': ['10px', {
          lineHeight: '14px',
          fontWeight: '400',
        }],
        'footnote-normal': ['12px', {
          lineHeight: '16px',
          fontWeight: '400',
        }],
        'body-normal': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'body-small': ['14px', {
          lineHeight: '20px',
          fontWeight: '400',
        }],
        'header-h2': ['24px', {
          lineHeight: '32px',
          fontWeight: '800',
        }],
        'header-h3': ['20px', {
          lineHeight: '28px',
          fontWeight: '800',
        }],
      },
      colors: {
        'accent': '#1790FF',
        'primary': '#000F24',
        'light': '#579DFF',
        'lessonConsultation': '#FFF0FE',
        'lessonWork': '#EBFFF9',
        'lessonBooking': '#43719C',
        'disabled': '#E4EBF2',
        'red': '#EB054A',
        'green': '#00573E',
        'hint': '#607490',
        'tertiary': '#9AA8BC',
        'gray': 'rgb(245, 247, 249)',
        'accent2': '#0064F0',
        'blue': '#EBF3FE',
        'accent3': '#092035'
      },
      boxShadow: {
        'nav': '0px 6px 24px 0px rgba(0, 0, 0, 0.1)',
        'card': '0px 2px 12px 0px rgba(0, 0, 0, 0.07),0px -2px 12px 0px rgba(0, 0, 0, 0.05);',
      }
    },
  },
  plugins: [],
}

