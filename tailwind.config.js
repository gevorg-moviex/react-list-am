/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "8x130": "repeat(8, 130px)",
        '7x130': 'repeat(7, 130px)',
        '6x130': 'repeat(6, 130px)',
        '4x130': 'repeat(4, 130px)',
        '3x130': 'repeat(3, 130px)',
        '2x130': 'repeat(2, 130px)',
        "6xauto": 'repeat(6, auto)',
        "10xauto": "repeat(10, auto)",
      },
      gridTemplateRows: {
        'auto-auto': 'auto auto',
        "130px-130px": "130px 130px",
        '1x130': '130px',
        '2x130': 'repeat(2, 130px)',
        '4x130': 'repeat(4, 130px)',
        'auto': 'auto',
      },
      boxShadow: {
        "myBoxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "productsShadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
      },
      screens: {
        'zero': '320px',
      },
    },
  },
  plugins: [],
};

