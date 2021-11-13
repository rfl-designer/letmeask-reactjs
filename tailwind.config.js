module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      gray: {
        light: '#DBDCDD',
        medium: '#A8A8B3',
        dark: '#737380',
        black: '#29292E',
        shadow: '#050206',
      },
      pink: {
        light: '#D67EE2',
        dark: '#E559F9',
      },
      white: {
        background: '#F8F8F8',
        details: '#FEFEFE',        
      },
      purple: {
        base: '#6F4BD8',
      },

      danger:{
         base: '#D73754', 
      },
    },
    
    fontFamily:{
      'roboto': 'roboto, sans-serif',
      'poppins': 'poppins, sans-serif',
    },
    extend: {
    
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
