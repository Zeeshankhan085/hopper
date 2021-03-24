 // tailwind.config.js
 module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         'light-blue': '#10afe7',
         'shakespeare': '#5BBCCE'
       },
       spacing: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '120': '44rem',
        '150': '50rem'

      },

       gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(120px, 1fr))',
      },
     },
   },
   variants: {},
   plugins: [],
 }
