/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          fuchsia: {
            light: '#f8c1f4',
            DEFAULT: '#e11d74',
            dark: '#9b1561',
          },
        },
      },
    },
  },
  plugins: [],
};
