/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important : true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rrane' : "0 5px 20px rgb(0 0 0 / 10%)"
      }
    },
    letterSpacing: {
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.1em',
      elraenn: '.125rem',
    },
    screens: {
      '1164': '1164px',
      '1336' : {'max' : '1336px'},
      '1320' : {'max' : '1320px'},
      '1312' : {'max' : '1312px'},
      '1205' : {'max' : '1205px'},
      '1105' : {'max' : '1105px'},
      '1060' : {'max' : '1060px'},
      '935' : {'max' : '935px'},
      '747' : {'max' : '747px'},
      '570' : {'max' : '570px'},
      '500' : {'max' : '500px'},
      '450': {'max': '450px'},
      '445': {'max': '445px'},
      '440' : {'max' : '440px'},
      '320' : {'max' : '320px'},
      '445min' : '445px',
      '440min' : '440px',
      'smmax': {'max': '639px'},
      '836' : '836px',
      '500min' : '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lgmax': {'max' : '1024px'},
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
