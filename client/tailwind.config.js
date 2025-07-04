/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#8443f6",

                light1: "#ffffff",
                light2: "#f6f5fa",
                light3: "#e8e7ed",

                dark1: "#767b8e",
                dark2: "#5b6274",
                dark3: "#2b2933",

                green: "#499243",
                orange: "#de8702",
                red: "#ff7877",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
