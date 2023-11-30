export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '365px',
            },
            maxWidth: {
                '120': '120px',
                '52': '52px',
                '1250': '1250px',

            },
            minWidth: {
                '1250': '1250px',
                '1000': '1000px',
            },
            colors: {
                'manga-1': '#1C274C',
                'manga-bg': '#E2E8FA',
                'manga-2': '#1C274C80'


},
            width: {
                '34': '34px',
                '120': '120px',
                '556': '556px',
                '1250': '1250px',
            },
            height: {
                '180': '180px',
                '80': '80px',
            },
            inset: {
                '160': '10rem',
                '335': '20rem',
                '20': '1.25rem',
            },
            spacing: {
                '5': '5px',
            },
            fontFamily: {
                'exo': ['Exo', 'sans-serif'],
                'exo-2': ['Exo 2', 'sans-serif'],
                'public-sans': ['Public Sans', 'sans-serif'],
                'nunito': ['Nunito', 'sans-serif'],
                'red-rose': ['Red Rose', 'serif']
            },
        },
    },
    plugins: [],
}