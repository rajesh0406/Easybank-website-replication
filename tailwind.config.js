module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
       darkblue:"#2d314d",
       limegreen:"#31d35c",
       brightcyan:"#2bb7da",
       grayishblue:"#9698a6",
       lightgrayishblue:"#9698a6",
       verylightgray:"#fafafa",
       white:"#ffffff",
       black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'public':['Public Sans', 'sans-serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
