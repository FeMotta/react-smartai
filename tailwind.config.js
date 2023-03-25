/** @type {import('tailwindcss').Config} */

const fontFamily = {
  'roboto': ['Roboto', 'sans-serif'],
  'montserrat': ['Montserrat', 'sans-serif'],
};

const formSelectBackgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E")`;

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#fff',
        'main': '#333',
        'hover': '#1a1a1a',
        'active': '#0d0d0d',
        'hover-option': '#eee',
        'checked-option': '#ccc',
      },
      boxShadow: {
        'form-button': '0px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px rgba(0, 0, 0, 0.15)',
        'form-button-hover': '0px 6px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px rgba(0, 0, 0, 0.15)',
      },
      animationDelay: {
        '160': '160ms',
        '320': '320ms',
      }, 
      backgroundImage: {
        'form-select': formSelectBackgroundImage,
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      borderColor: {
        'primary': '#333',
        'secondary': '#666',
      },
      minWidth: {
        '0': '0',
        '300': '300px',
        '500': '500px',
        '600': '600px',
      },
      fontFamily: {
        ...fontFamily,
      },
      fontSize: {
        '4.5xl': '1.5rem',
      },
      margin: {
        '1.3rem': '1.3rem',
      },
      textColor: {
        'primary': '#333',
        'secondary': '#666',
      },
      width: {
        '25vw': '25vw',
      },
      height: {
        '100px': '100px',
      },
      transitionDuration: {
        '300': '0.3s',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    transform: ['responsive', 'hover', 'focus', 'active'],
    margin: ['responsive', 'hover', 'focus', 'first', 'last'],
  },
  plugins: [],
}
