/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': '#040A10',
        'hov': '#ECE4B7',
        'WA': '#00FF00',
    },
      fontFamily: {
        'headerfont': "Space Grotesk",
        'sidebarfont': "ubuntu",
        'mt': "Nunito",
        'ht':"Playwrite NZ",
        'legend': "Chakra Petch",
      },
      borderRadius: {
        'cround': "100px",
      },
      width: {
        '128':"32rem",
      },
      height: {
        '1/10':"10%",
        '2/10':"20%",
        '3/10':"30%",
        '4/10':"40%",
        '5/10':"50%",
        '6/10':"60%",
        '7/10':"70%",
        '8/10':"80%",
        '9/10':"90%",
        '10/10':"100%",
      },
    },
  },
  plugins: [],
}

