module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page-templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        primary: "#1870E4", //default primaru color
        "primary-hover": "#4780CF", // hover color 45% opacity
        "primary-pressed": "#000747", // pressed drak blue color
        secondary: "#FFFFFF",
        "secondary-hover": "#F5F5F5",
        "secondary-pressed": "#FFFFFF",
        "secondary-border": "#797979",
        "secondary-border-hover": "#262424",
        "secondary-border-pressed": "#1870E4",
        highlight: "#F5F7FA",
        "body-color": "#000",
        "dark-blue": "#18153B",
        "icon-button": "#4067E0", //icon button border
        "icon-button-border": "#B7BAC7", //icon button border
        "title-color": "#000",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        scroll: "scroll linear infinite", // when used, the animation-duration has to be set manually
        "scroll-reverse": "scroll-reverse linear infinite", // when used, the animation-duration has to be set manually
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
