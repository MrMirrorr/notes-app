module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-color': '#1F2021',
                'aside-color': '#232526',
                'search-input-color': '#28282A',
                'main-text-color': '#ccc',
                'border-color': '#292A2B',
                'active-elem-color': '#313233',
            },
            height: {
                'header-height': '5vh',
                'aside-height': '95vh',
                'main-height': '95vh',
            },
            maxWidth: {
                '1/2': '50%',
            },
            maxHeight: {
                'half-vh': '50vh',
            },
            minWidth: {
                'aside-min-width': '175px',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
    variants: {
        scrollbar: ['rounded'],
    },
};
