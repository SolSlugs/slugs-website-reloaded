const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        fontFamily: {
            sans: ['VT323', 'sans-serif'],
        },
        screens: {
            'xs': '475px',

            'sm': '700px',

            'md': '840px',

            'lg': '1100px',

            'xl': '1400px',

            '2xl': '1700px',
        },
        extend: {
            colors: {
                slugGreen: '#92E643',
                slugGreenDark: 'rgba(146, 230, 67, 0.5)',
                exclusive: '#A3DBFF',
                acolyte: '#FC9191',
                incinerator: '#F44343',
                pyro: '#FB6D00',
                scorcher: '#F4A133',
            },
            keyframes: {
                moveRainbow: {
                    '100%': { 'background-position': '4500vh' },
                },
            },
            animation: {
                'rainbow': 'moveRainbow 200s linear infinite',
            },
        },
    },
    plugins: [],
};
