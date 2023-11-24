/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    screens: {
      'xs': '400px',
      'xxs':'450px',
      'sm': '560px',
      'md': '680px',
      'lg': '880px',
      'xl': '1100px',
      'xxl': '1200px',
      '2xl': '1400px',
      '2xxl': '1600px',
      '3xl': '1900px',

    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
          'hero': 'url(./src/assets/images/calculator.jpg)',
      },
      colors: {
        'primary': "#ECEEFF",
        "red-color": "#FF0000",
        "shadow" : "#E6E6E6",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [
    
  ],
}