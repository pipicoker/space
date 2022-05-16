module.exports = {
  content: ["./public/**/*.{html,js}",
  "./public/index.html",


],
  theme: {
    fontFamily: {
      "barlow": ['Barlow Condensed Regular'],
      "bell": ['Bellefair Regular']

    },
    extend: {
      backgroundImage: {
        'mobile-background': "url(space-tourism-website-main/assets/home/background-home-mobile.jpg)",
        'tablet-background': "url('space-tourism-website-main/assets/home/background-home-tablet.jpg')",
        'desktop-background': "url(space-tourism-website-main/assets/home/background-home-desktop.jpg)",

        'destination-mobile': "url(space-tourism-website-main/assets/destination/background-destination-mobile.jpg)",
        'destination-tablet': "url(space-tourism-website-main/assets/destination/background-destination-tablet.jpg)",
        'destination-desktop': "url(space-tourism-website-main/assets/destination/background-destination-desktop.jpg)",

        'crew-mobile': "url(space-tourism-website-main/assets/crew/background-crew-mobile.jpg)",
        'crew-tablet': "url(space-tourism-website-main/assets/crew/background-crew-tablet.jpg)",
        'crew-desktop': "url(space-tourism-website-main/assets/crew/background-crew-desktop.jpg)",

        'technology-mobile': "url(space-tourism-website-main/assets/technology/background-technology-mobile.jpg)",
        'technology-tablet': "url(space-tourism-website-main/assets/technology/background-technology-tablet.jpg)",
        'technology-desktop': "url(space-tourism-website-main/assets/technology/background-technology-desktop.jpg)"


      },
      colors: {
        'faint-gray': '#D0D6F9',
        
      },
      width: {
        "150": "150px",
        "200": "200px"
      },
      height: {
        "150": "150px",
        "200": "200px"
      },

      opacity: {
        '10': '0.1'
      }
    },
  },
  plugins: [],
}
