/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'card-bg': '#171717',
            },
            fontFamily: {
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
