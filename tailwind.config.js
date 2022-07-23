module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'summoner-light' : 'rgb(49,49,60)',
        'summoner-gray' : 'rgb(142,150,161)',
        'summoner-dark' : 'rgb(40,40,48)',
        'navbar-color' : 'rgb(86,134,229)',
        'button-color' : 'rgb(41,53,77)',
        'loss-border' : 'rgb(230,67,90)',
        'loss': 'rgb(89,53,59)',
        'loss-button' : 'rgb(111,61,72)',
        'win-border' : 'rgb(86,134,229)',
        'win' : 'rgb(41,53,77)',
        'win-button' : 'rgb(48,68,109)',
      }
    },
  },
  plugins: [],
}