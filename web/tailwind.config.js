/** @type {import('tailwindcss').Config} */



// --primary: #2c2c2c;
// --secondary: #424050;
// --accent: #8685ef;

// --text-primary: #faf7ff;
// --text-secondary: #2b2b2b;


export default {
  content: [
      "./index.html",
      "./src/**/*.{svelte,js,ts,jsx,tsx}",
    ],
theme: {
  extend: {
      colors: {
          'primary': '#a9e34b',
          'secondary': '#3C3C3C',
          'accent': '#a9e34b93',

          'success': '#7FEB9D',
          'error': '#E5283E',

          'txt-primary': '#faf7ff',
          'txt-secondary': '#2b2b2b',
      },
  },
},
plugins: [],
}
