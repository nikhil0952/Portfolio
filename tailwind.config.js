/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        uniquifier: ["Honk", "system-ui"],
        Robot: ["Roboto"],
        anton: ["Anton", "sans-serif"],
        work: ["Workbench"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

