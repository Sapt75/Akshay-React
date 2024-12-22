// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust based on where your files are
  ],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
};

