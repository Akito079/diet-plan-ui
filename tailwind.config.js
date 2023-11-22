/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        sora : ["Sora","sans-serif"],
        "dancing-script" : ["Dancing Script","cursive"]
      },
      backgroundImage : {
        "header-image-1" :  "linear-gradient(to bottom,rgb(255,255,255,0.75),transparent),url(./assets/header-img-1.png)",
        "healthy-juice" : "linear-gradient(to bottom,rgb(255,255,255,0.75),transparent),url(./assets/healthy-juice.png)",
        "about-image" : "url(../assets/hero-image-2.png)",
        "organic" : "linear-gradient(to bottom,rgb(255,255,255,1.5),transparent),url(../assets/about-hero-2.png)",
      }
    },
  },
  plugins: [],
}