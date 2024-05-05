/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0090ff",

          secondary: "#0000ff",

          accent: "#007a00",

          neutral: "#1d1d1d",

          "base-100": "#fff8ff",

          info: "#0084af",

          success: "#00efb1",

          warning: "#e58700",

          error: "#ff3065",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
