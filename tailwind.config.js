/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      smx: "550px",
      smd: "769px",
      md: "970px",
      lg: "1025px",
      mxl: "1150px",
      xl: "1200px",
      xxl: "1400px",
      "2xl": "1536px",
      "3xl": "1670px",
    },
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-anim": "bounce 1s infinite",
      },
    },
  },
};
