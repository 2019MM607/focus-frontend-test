/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/**/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            background: '#050505',
            textPrimary: '#1f2937',
            textWhite: '#FFFFFF',
            red: '#D83855',
            from: '#b91c1c',
            transparent: 'transparent',
        },
        extend: {},
    },
    plugins: [],
};
