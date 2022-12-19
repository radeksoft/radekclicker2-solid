/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
          sans: ['Balsamiq Sans']
        },
        extend: {
            keyframes: {
              button: {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(0.92)" }
              }
            },
            animation: {
              button: "button 80ms ease-in-out"
            },
        },
    },
    plugins: [],
};
