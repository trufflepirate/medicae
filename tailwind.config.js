/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'standardbg': "url('../public/assets/dash_bg.jpg')",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#002B53",

          "secondary": "#D926AA",

          "accent": "#1FB2A5",

          "neutral": "#EEEEEE",

          "base-100": "#EEEEEE",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",

        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

